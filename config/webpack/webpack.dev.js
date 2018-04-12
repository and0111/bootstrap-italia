const webpack = require('webpack')
// const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = {
  // devtool: 'cheap-module-eval-source-map' || 'inline-source-map',
  // devServer: {
  //   open: true,
  //   hot: true,
  //   historyApiFallback: true,
  //   contentBase: '_gh_pages'
  //   // port: 8080
  // },
  watch: true,
  plugins: [
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new WebpackShellPlugin({
    //   onBuildExit: ['jekyll serve ---livereload --incremental']
    // })
  ]
}
