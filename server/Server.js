var express = require('express');
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var arr = [];

io.on("connection", function(socket){
    console.log("member connect" + socket.id);
    socket.on("client-send-text", function(data) {
        console.log("server get data:" + data)
        arr.push(data);
        console.log("array =" + arr);
        io.sockets.emit("server-send-text", arr);
    });
});