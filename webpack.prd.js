const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
    // filename: '[name].[contenthash].bundle.js',
  },
});