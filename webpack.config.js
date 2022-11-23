const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './code/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
      },
      plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
    module: {
        rules: [
            {
                test: /\.css$/i, //for css files
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/i, //for .png images
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2)$/i, //for fonts
                type: 'asset/resource'
            }
        ]
    }
};