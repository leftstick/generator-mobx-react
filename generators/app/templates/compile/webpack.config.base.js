const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = resolve(__dirname, '..')

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[path]_[name]_[local]_[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.jsx?$/,
          use: ['babel-loader', 'eslint-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)\w*/,
          use: ['file-loader']
        }
      ]
    },
    resolve: {
      modules: [resolve(root, 'node_modules'), root, resolve(root, 'src')],
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: resolve(root, 'src', 'index.html'),
        favicon: resolve(root, 'src', 'assets', 'favicon.ico'),
        hash: false
      })
    ]
  }
}
