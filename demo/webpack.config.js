const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './index.js',
  ],

  output: {
    path: __dirname,
    publicPath: '/static',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-hot-loader/babel'],
        },
      },
    ],
  },

  resolve: {
    alias: {
      'react-module': path.resolve(__dirname, './../src/components'),
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

};
