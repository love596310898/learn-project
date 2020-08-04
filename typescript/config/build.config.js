const path = require('path');

const resolve = (filePath) => path.join(__dirname, filePath);
module.exports = {
  mode: 'development',
  ...{},
  entry: resolve('../src/test.ts'),
  output: {
    filename: 'build.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
};
