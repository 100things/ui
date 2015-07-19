var path = require('path');
var webpack = require('webpack');
var base = require('./webpack.config');

module.exports = {
  cache: true,
  context: base.context,
  entry: base.entry,
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'bundle.dev.js',
    publicPath: 'http://127.0.0.1:2992/js'
  },
  module: base.module,
  resolve: base.resolve,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
