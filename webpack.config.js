const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, './src'),
}

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  module: {
    rules: [
      { 
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
            pretty: true
                }
      },
      {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
      }, 
      {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: 'postcss.config.js' } }
        }, {
          loader: 'resolve-url-loader'
          // options: {sourceMap: true }
        }, {
          loader: 'sass-loader',
          options: { 
            sourceMap: true,
            data: '@import "globals.scss";',
            includePaths: [path.join(__dirname, './src')] 
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: 'postcss.config.js' } }
        }
      ]
    },

    {
      test: /\.(eot|woff|ttf|svg)$/,
      use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
          }
      }]
    },
    {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			exclude: [/fonts/],
			options: {
        name: '[name].[ext]',
        outputPath: 'img/'
			}
		}
  ]
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.pug',
        inject: true
    }),
    new CopyWebpackPlugin([
      { from: PATHS.src + '/blocks/headline/images', to: `headline/images` },
      { from: PATHS.src + '/images/favicons', to: `images/favicons` }
    ]), 
  ]
}