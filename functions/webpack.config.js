'use strict';

var nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    libraryTarget: 'this'
  },
  devtool: 'inline-source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: [nodeExternals()]
};
