var Hapi = require('hapi');

var server = module.exports = new Hapi.Server();

server.connection({
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3000
});


server.register({ register: require('./server/index')}, function (err) {
    console.error(err);
});

server.start();
