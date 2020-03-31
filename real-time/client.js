const io = require('socket.io-client');

let socket = io.connect('http://localhost:4000',{reconnect: true});

socket.on('connect',function(){

})