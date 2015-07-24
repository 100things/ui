var path = require('path');
var Controllers = require('./controllers');

exports.register = function (plugin, options, next) {

  plugin.views({
    engines: {
      html: require('handlebars')
    },
    path: path.join(__dirname, './templates')
  });


  plugin.route([
    {
      method: 'GET', path: '/js/{param*}', handler: {
        directory: {
          path: 'dist/js'
        }
      }
    },
    { method: 'GET', path: '/{params*}', config: Controllers.Pages.index },
    { method: 'GET', path: '/api/things', config: Controllers.Things.fetch }
  ]);

  next();
};

exports.register.attributes = {
  pkg: require('../package.json')
};
