const webpack = require('webpack');
const loaders = require('./loaders');
const plugins = require('./plugins');
const path = require('path');

const {
  NODE_ENV = ''
} = process.env || {};

module.exports = {
  entry: {
    app: ["./src/index.tsx"],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    publicPath: '/',
  },
  module: {
    rules: [
      loaders.JSLoader,
      loaders.TSLoader,
    ]
  },
  plugins: [
    plugins.HtmlWebpackPlugin,
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/
    ]),
  ],
  resolve: {
    extensions: ['.webpack.js', '.mjs', '.ts', '.tsx', '.js', '.jsx', '.json']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    host: '0.0.0.0',
    watchContentBase: true,
    contentBase: '.',
    hot: true,
    historyApiFallback: true,
  }
};
