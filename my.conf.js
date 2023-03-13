// Karma configuration
// Generated on Thu Mar 09 2023 16:37:07 GMT+0530 (India Standard Time)
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine', 'webpack'],

    plugins: [
      'karma-webpack',
      //'karma-babel-preprocessor',
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'test/*.js'
    ],


    // list of files / patterns to exclude
    exclude: [
      "src/index.js",
      "src/orderHistIndex.js"
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      'test/*.js': [ 'webpack'],
      'src/*.js': ['webpack']
    },

    // babelPreprocessor: {
    //   options: {
    //     presets: ['@babel/preset-env'],
    //     sourceMap: 'inline'
    //   },
    //   filename: function (file) {
    //     return file.originalPath.replace(/\.js$/, '.es5.js');
    //   },
    //   sourceFileName: function (file) {
    //     return file.originalPath;
    //   }
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['ChromeHeadless'],

    webpack:{
      entry: {
        order: path.resolve(__dirname, './src/index.js'),
        orderHistory: path.resolve(__dirname, "./src/orderHistIndex.js")
      },
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
      },
      mode: 'development',
      devServer: {
        historyApiFallback: true,
        static: {directory: path.resolve(__dirname, './dist')},
        open: true,
        compress: true,
        hot: true,
        port: 5050,
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './src/template.html'), // template file
          filename: 'index.html', // output file
          chunks: ['order']
        }),
        new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './src/orderHistory.html'), // template file
          filename: 'orderHistory.html', // output file
          chunks: ['orderHistory']
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ],
      module: {
        rules: [
          // JavaScript
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          // Images
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
          // Fonts and SVGs
          {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
          },
          // CSS, PostCSS, and Sass
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          },
        ],
      },
    },

    

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity
  })
}
