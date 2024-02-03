const path = require('path')
const HtmlWEbpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: { import: './src/js/index.js', dependOn: 'shared' },
        sum: { import: './src/js/sum.js', dependOn: 'shared' },
        shared: 'lodash',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devServer: {
        static: './dist',
    },
    plugins: [new HtmlWEbpackPlugin({ template: './src/main.html' })],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}
