// Webpack v4
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: { 
    home: ['./views/pages/home/home.scss'],
    about: ['./views/pages/about/about.scss']
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use:  [  MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
    })
  ]
};