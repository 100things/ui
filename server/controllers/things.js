var data = {
  things: [
    { id: 1, name: 'Thing 1', image: 'http://placekitten.com/g/601/300' },
    { id: 2, name: 'Thing 2', image: 'http://placekitten.com/g/602/300' },
    { id: 3, name: 'Thing 3', image: 'http://placekitten.com/g/603/300' }
  ]
};

exports.fetch = {
    handler: function (request, reply) {
      reply(data.things);
    }
};
