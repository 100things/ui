var base = require('./webpack.config.dev');

var jsLoader = base.module.loaders[0];
jsLoader.loaders = ['react-hot'].concat(jsLoader.loaders);

module.exports = {
    cache: true,
    context: base.context,
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        base.entry
    ],
    output: base.output,
    module: base.module,
    resolve: base.resolve,
    devtool: 'eval-source-map',
    plugins: base.plugins
};
