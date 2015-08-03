var low = require('lowdb');
var path = require('path');
var uuid = require('uuid');
var db = low(path.join(__dirname, 'db.json'));

exports.fetch = {
    handler: function (request, reply) {
      reply(db.object.things);
    }
};

exports.create = {
    handler: function (request, reply) {
      request.payload.id = uuid();
      db('things').push(request.payload);
      reply(request.payload);
    }
};
