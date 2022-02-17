const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env',],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.css/,
                use: {
                    loader: 'file-loader?name=[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico',
            manifest: './public/manifest.json'
        })
    ]
};