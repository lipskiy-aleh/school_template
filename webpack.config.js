const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname, './tasks/task-webpack/src/index.js'),
  output: {
    path: path.resolve(__dirname, './tasks/task-webpack/dist'),
    filename: 'bundle.[hash].js',
    clean: true,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader',
      ],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './tasks/task-webpack/src/index.html'),
      inject: true,
    }),
    new MiniCssExtractPlugin(),
  ],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, './tasks/task-webpack/dist'),
    port: 9000,
  },
}
