const webpack = require('webpack')
const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      parallel: 4,
      extraComments: true
    }),
    new webpack.DefinePlugin(
      {'process.env.NODE_ENV': JSON.stringify('production')}
    ),
    new WebpackShellPlugin({ onBuildExit: ['jekyll build --incremental'] })
  ]
}
