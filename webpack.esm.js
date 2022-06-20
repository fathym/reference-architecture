const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        options: {
            configFile: "webpack_configs/tsconfig.esm.json"
        },
      },
    ],
  },
  output: {
    filename: 'index.esm.js',
    // filename: '[name].bundle.js',
  },
});