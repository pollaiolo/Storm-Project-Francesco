
var http = require("http");
var sio = require('socket.io');

var server = http.createServer(function(request, response) {  
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('Server is running on localhost:8180');
    response.end();
   }).listen(3000);


//socket listen to server port
var socket = sio.listen(server);

//behavior of socket(server side) on incoming connection
socket.on('connection', function(client){ 
    console.log("client connected");
    client.on('message', function(data){ 
        console.log(data);
     });

    client.on('disconnect', function(){

        console.log('connection closed');
    });

});