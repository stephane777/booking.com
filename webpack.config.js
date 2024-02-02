const path = require('path');
const HtmlWEbpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }},          
            {
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
            
        
      ],
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWEbpackPlugin({title: 'development'})
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};