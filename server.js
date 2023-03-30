const WebSocket = require("ws");

const server = new WebSocket.Server({ port: process.env.PORT || 8080 });

server.on('connection', (s) => {
    console.log('Client connected');

    s.on('message', (message) => {
        console.log(`Recieved message: ${message}`);
        s.send(`Echo: ${message}`);
    });

    s.on('close', () => {
        console.log(`Client disconnected.`);
    });
});
