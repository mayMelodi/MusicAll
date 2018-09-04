class WebSocket {

    constructor(server) {
        if (!server) return new Error('Invalid server parameter');

        // Defines
        this.connections = [];
        this._ws = require('socket.io')(server);

        // WS connection
        this._ws.of('/playlist').on('connection', (socket) => {
            console.log("WS: new client " + socket.client.id);

            playlist.list()
                .then(list => {
                    list.forEach(element => {
                        socket.emit('update', { 'action': 'add', 'data': element});
                    })
                }).catch ((err) => { console.log(err) });

            socket.on('disconnect', () => {
                console.log("WS: client disconnected " + socket.client.id);
            });
            this.connections.push(socket);
        });

    }

    update(action, data) {
        if (action)
        {
            this.connections.forEach(client => {
                client.emit('update', {"action": action, "data": data });
            });
        }
    }
}

module.exports.WebSocket = WebSocket;