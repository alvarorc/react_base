'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
// let BowerWebpackPlugin = require('bower-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin(
      'main.css',
      { allChunks: true }
    )
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  exclude: /node_modules/,
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
});

module.exports = config;
