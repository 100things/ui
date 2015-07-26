require('babel/register')({
  stage: 0
});
var Router = require('react-router');
var routes = require('../../client/routes');
var AltIso = require('alt/utils/AltIso');
var Flux = require('../../client/flux');

var WEBPACK_DEV = process.env.WEBPACK_DEV === 'true';
var path = require('path');

exports.index = {
  handler: function (req, reply) {
    var bundleJs;
    var serverWidth = req.state['reactsponsive.width'] || 0;

    if (WEBPACK_DEV) {
      bundleJs = 'http://127.0.0.1:2992/js/bundle.dev.js';
    } else {
      var stats = require('../../dist/server/stats.json');
      bundleJs = path.join('/js', stats.assetsByChunkName.main[0]);
    }

    // Send to react router.
    Router.run(routes, req.url.path || '/', function (Handler, route) {
      var flux = new Flux();

      try {
        var viewData = {
          layout: false,
          bundles: {
            js: bundleJs
          },
          content: null,
          title: null
        };

        AltIso.render(
          flux,
          Handler,
          {
            route: route,
            flux: flux,
            width: serverWidth
          }
        ).then(function (markup) {
          if (markup.err) {
            console.log(markup.err);
          }
          viewData.content = markup.html;

          reply.view('index', viewData);
        });

      } catch(e) {
        console.log(e.stack);
        console.log(e);
        throw e;
      }

    });
  }
};
