var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config.js');

var bundler = webpack(webpackConfig);

module.exports = {

  server: {
    baseDir: './',
    index: 'index.html'
  },

  open: false,

  middleware: [
    webpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
        assets: true,
    	chunkModules: false,
    	chunks: false
      }
    }),
    webpackHotMiddleware(bundler)
  ]

};
