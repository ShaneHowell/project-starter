import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: {
    initial: './app/assets/scripts/Initial.js',
    home: './app/assets/scripts/Home.js'
  },
  output: {
    path: __dirname + '/app/assets/_compiled',
    publicPath: '/app/assets/_compiled',
    filename: '[name].js',
    chunkFilename: '[name]_[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
