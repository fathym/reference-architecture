const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PackageJsonDeploy = require('./node_modules/@fathym-devkit/package-json-deploy-webpack-plugin/src/lib/PackageJsonDeploy.js');
const packageJson = require('./package.json');

module.exports = {
  entry:{
    common: './src/index.ts',
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: 'public/',
          globOptions: { ignore: ['**/public/index.html'] },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      publicPath: './',
      template: 'public/index.html',
    }),
    new PackageJsonDeploy({
      PackageFormat: {
        name: "@fathym/common",
        version: null,
      },
      PackageJson: packageJson
    })
  ],
};
