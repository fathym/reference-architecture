const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const PackageJsonDeploy = require('./projects/common/lib/PackageJsonDeploy.js');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
  },
});
