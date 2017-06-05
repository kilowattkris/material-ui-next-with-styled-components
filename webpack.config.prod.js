import webpack from 'webpack';
import path from 'path';

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

export default {
  entry: path.resolve(__dirname, 'src/index'),
  // Render source-map file for final build
  devtool: 'source-map',
  target: 'web',
  // output config
  output: {
    path: __dirname + '/dist', // Path of output file
    publicPath: '/',
    filename: 'bundle.js', // Name of output file
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // suppresses warnings, usually from module minification
        warnings: false,
      },
    }),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      {
        test: /\.jpg/,
        loader: 'file'
      },
      {
        test: /\.css/,
        loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext']
      }
    ],
  },
};
