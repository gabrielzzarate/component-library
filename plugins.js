const path = require('path');
const _UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const _HtmlWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV = ''} = process.env || {};

const UglifyJsPlugin = new _UglifyJsPlugin({
  cache: true,
  parallel: true,
  sourceMap: NODE_ENV === 'production' ? false : true,
});

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
  template: path.join(__dirname, './index.template.html'),
  hash: true,
  chunksSortMode: 'none',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeAttributeQuotes: false,
    useShortDoctype: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
  }
});

module.exports = {
  UglifyJsPlugin,
  HtmlWebpackPlugin
}