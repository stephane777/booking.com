const path = require('path')
const HtmlWEbpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                mimetype: 'image/svg+xml',
                scheme: 'data',
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[hash].svg',
                },
            },
        ],
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
