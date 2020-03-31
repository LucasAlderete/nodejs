const express = require('express');

const socketio = require('socket.io');

const app = express();

app.get('/',function(req,res){
    res.sendFile('index.html',{
        root : __dirname
    });
});


let server = app.listen(4000);

let sockets = {};
let io = socketio(server);

let userCount = 0;

io.on('connection',function(socket){
    // let userId = socket.request._query.loggeduser;
    // if(userId) sockets[userId] = socket;

    userCount++;

    io.emit('count_updated',{count : userCount});

    socket.on("emitirMensaje",function(data){
        io.emit("recibirMensaje",data);
    }) 
    socket.on('disconnect',function(){

        // Object.keys(sockets).forEach(userId=>{
        //     let s = sockets[userId];
        //     if(s.id == socket.id ) sockets[userId] = null;
        // })

        userCount--;
        io.emit('count_updated',{count : userCount});
    });

});
 


const client = require("./client");