const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const merge = require('webpack-merge')

const devConfig = require('./config/webpack/webpack.dev.js')
const prodConfig = require('./config/webpack/webpack.prod.js')
const rules = require('./config/webpack/webpack.loaders.js')

const rootDir = path.resolve(__dirname, './')
const buildDir = path.resolve(__dirname, './build')

const cssFontPlugin = new ExtractTextPlugin('./css/italia-icon-font.css')
const scssPlugin = new ExtractTextPlugin('./css/bootstrap-italia.min.css')


const commonConfig = {
  entry: {
    app: rootDir.concat('/index.js')
  },
  output: {
    path: buildDir,
    publicPath: '/',
    filename: './js/bootstrap-italia.bundle.min.js'
  },
  resolve: {
    alias: {
      picker: path.resolve(__dirname, './node_modules/pickadate/lib/picker.js')
    } // aliases used to resolve 'pickadate' issue#870
  },
  plugins: [
    new CleanWebpackPlugin(buildDir),
    cssFontPlugin,
    scssPlugin
  ],
  module: {
    rules: [
      rules.jsRule,
      rules.scssRule(scssPlugin),
      rules.cssFontRule(cssFontPlugin),
      rules.fontRule,
      rules.htmlRule,
      rules.imgRule
    ]
  }
}

module.exports = (env = {}) => {
  return merge(commonConfig, env.prod ? prodConfig : devConfig)
}
