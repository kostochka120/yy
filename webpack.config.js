const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/script.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        new miniCss({
			filename: './style.css',
		}),
    ],
    module:{
        rules:[
            {
                test: /\.s(a|c)ss$/,
                use: [            
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    presets: [
                        '@babel/preset-env'
                    ],
                },
            }
        ],
    },
}