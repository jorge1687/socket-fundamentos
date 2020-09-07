const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        //para enviar a todos los clientes
        client.broadcast.emit('enviarMensajes', data);

        /*if (mensaje.usuario) {
            callback({
                resp: 'OK'
            });
        } else {
            callback({
                resp: 'NO OK'
            });
        } */


    });

});