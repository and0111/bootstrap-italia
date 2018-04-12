const jsRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules|public/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: ['babel-preset-stage-0', 'babel-preset-env']
    }
  },
  { loader: 'expose-loader?picker!pickadate/lib/compressed/picker.js' }
]
}

const scssRule = (scssPlugin) => {
  return {
    test: /\.(scss)$/,
    use: scssPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader'
        // options: { alias: { '../img': '../public/img' } }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('autoprefixer')({ browsers: ['last 2 versions'] })
          ]
        }
      },
      {
        loader: 'sass-loader'
      }]
    })
  }
}

const cssFontRule = (cssFontPlugin) => {
  return {
    test: /\.css$/,
    use: cssFontPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
  }
}

const fontRule = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'file-loader',
  options: { name: './font/italia-icon-font.[ext]' }
}

const htmlRule = {
  test: /\.html$/,
  use: [{ loader: 'html-loader', options: { minimize: true } }]
}

const imgRule = {
  test: /\.(png|jpe?g|gif|ico)$/,
  use: [{
    // loader: 'url-loader',
    loader: 'file-loader',
    options: { name: './img/[name].[hash:8].[ext]' }
  }]
}

module.exports = {
  jsRule,
  scssRule,
  cssFontRule,
  fontRule,
  htmlRule,
  imgRule
}
