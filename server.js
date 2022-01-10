// const { send } = require('process')
// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '5000' })

// server.on('connection', socket => {
//     socket.on('message', function(message){
//         socket-send('Awajja ${message}');
//     });

//     server.clients.forEach(function e(client){
//         console.log("forEach test")
//         console.log(client)
//         console.log(message)
//         let bericht = message
//             client.send(
//                 //  type: ws.personName,
//                 //  data: message.data
//                 bericht
//                 );
//             });
// });

var server = require('ws').Server;
var s = new server({ port: 5002 });

s.on('connection', function(ws){
    ws.on('message', function(message){
console.log(message.toString())
       // message = JSON.parse(message);

        if(message.type == "message") {
            ws.personName = message.data;
        }

        console.log("Recieved: " +message.data);

        //ws.send("From Server: "+message);

        s.clients.forEach(function e(client){
            console.log("forEach test")
            console.log(client)
            console.log(message.toString())
            let bericht = message.toString()
                client.send(
                    //  type: ws.personName,
                    //  data: message.data
                    "Awaja"
                    );
        
       });

        

    });
    ws.on('close', function() {
        console.log("I Lost a client");
    });
});

