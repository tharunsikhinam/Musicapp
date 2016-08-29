/**
 * Created by quikr on 7/18/16.
 */
import webpack from "webpack";
import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";

//define constants here that can be used throughout the js file.
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  //Entry point to the js app
  entry: './src/index.js', //give app file entry at the end only

  target: 'web',
  //where to bundle
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  //for prod , serve it from ./dist
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), //For loading the js, files in the order that they are called
    new webpack.DefinePlugin(GLOBALS), //Pass a Json obejct of gloabl variables that can be referenced b libraries in index.js
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin() //minifies the js


  ],

  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ExtractTextPlugin.extract("css?sourceMap")}, //map css files for source mapping
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
