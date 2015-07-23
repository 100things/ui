require('babel/register')({
  stage: 0
});

var WEBPACK_DEV = process.env.WEBPACK_DEV === 'true';
var path = require('path');

exports.index = {
  handler: function (request, reply) {
    var bundleJs;

    if (WEBPACK_DEV) {
      bundleJs = 'http://127.0.0.1:2992/js/bundle.dev.js';
    } else {
      var stats = require('../../dist/server/stats.json');
      bundleJs = path.join('/js', stats.assetsByChunkName.main[0]);
    }

    reply.view('index', {
      layout: false,
      bundles: {
        js: bundleJs
      },
      content: null
    });
  }
};
