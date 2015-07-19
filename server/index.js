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
    { method: 'GET', path: '/', config: Controllers.Pages.index }
  ]);

  next();
};

exports.register.attributes = {
  pkg: require('../package.json')
};
