const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:["@babel/polyfill", './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader',  'sass-loader']
              }

        ],

    },


    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],

};