const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    clean: true,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    },
    {
      test: /\.css$/,
      use: [
        MiniCssPlugin.loader,
        'css-loader',
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: [
        'file-loader',
      ],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true,
    }),
    new MiniCssPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
  },
}
