const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

module.exports = {
    context: paths.src,  
    entry: {
        app: './index'  
    },
    
    output: {
        path: paths.dist, 
        filename: '[name].bundle.js'  
    },
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    devServer: {
      overlay: true,
      open: true,
      hot: true
    },

    devtool: 'inline-source-map', 
    
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                loader: 'awesome-typescript-loader',
                exclude: '/node_modules/'
            } 
        ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src/index.html')
      }) 
  ]
};