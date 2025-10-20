const path = require('path');

module.exports = {
  entry: './public/JS/index.js', // Correct entry point
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devServer: {
    static: './public', // Serve files from the 'public' directory
  },
  mode: 'development',
};