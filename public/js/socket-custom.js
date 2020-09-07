var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor ');
});

socket.on('disconnect', function() {
    console.log('Usuario perdio la desconexion');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jorge',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del server ', resp);
});

//Escucha mensaje
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});