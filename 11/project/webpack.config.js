const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    textPlugin = require('extract-text-webpack-plugin');

module.exports ={

    entry: {
        main: './app.js',
        vendor: ['jquery']
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {  rules: [
        {
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: {
                loader: 'babel-loader',
                options: { presets: ['env'] }
            }
        },
        {
            test: /\.s?css$/,
            use: textPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            }) }

    ]
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin( {name: 'vendor'} ),
        new textPlugin({
            filename: 'main.css'
        })
    ]
};