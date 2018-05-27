const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'production'
const VERSION = require('./package.json').version


module.exports = {
    entry: "./index.js",
    mode: env,
    output: {
        filename: env === 'production' ? `js/[name].${VERSION}-[hash].js` : 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    context: path.resolve(__dirname, 'src'),
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
           'process.env': {
             NODE_ENV: JSON.stringify(env)
           }
         }),
        new ExtractTextPlugin({
          filename: env === 'production' ? `css/styles.[name].${VERSION}-[hash].css` : 'css/main.[name].css',
          allChunks: true
        }),
        new HtmlWebpackPlugin({
              template: 'index.html'
          })
    ],
    performance: {
      hints: env === 'production' ? false : "warning"
    },
    devServer: {
         contentBase: path.resolve(__dirname, 'dist'),
         stats: 'errors-only',
         open: true,
         port: 8080,
         compress: true
       },
   module: {
        rules: [{
            test: /\.(jpg|png|gif|svg)$/,
            exclude: /node_modules/,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
        }, {
           test: /\.(css|scss)$/,
           exclude: /node_modules/,
           use: ExtractTextPlugin.extract({
             use: [{
               loader: "css-loader",
               options: {
                 minimize: true
               }
             }, "sass-loader", "postcss-loader"],
             fallback: 'style-loader'
            })
        }, {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'stage-0', 'react']
              }
          }
      }]
    }
}
