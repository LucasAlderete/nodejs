const express = require('express');

const socketio = require('socket.io');

const app = express();

app.get('/',function(req,res){
    res.sendFile('index.html',{
        root : __dirname
    });
});


let server = app.listen(4000);

let io = socketio(server);

let userCount = 0;

io.on('connection',function(socket){
    userCount++;

    io.emit('count_updated',{count : userCount});

    socket.on('disconnect',function(){
        userCount--;
        io.emit('count_updated',{count : userCount});
    });

});



