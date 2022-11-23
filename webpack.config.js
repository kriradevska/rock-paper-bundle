module.exports = {
    mode: 'development',
    entry: './code/main.js',
    module: {
        rules: [
            {
                test: /\.css$/i, //for css files
                use: ['style/loader', 'css-loader']
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
}