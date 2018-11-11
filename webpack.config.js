const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/*
https://github.com/jantimon/html-webpack-plugin
https://www.npmjs.com/package/file-loader
https://www.npmjs.com/package/url-loader
https://www.npmjs.com/package/img-loader
*/
/*
SCSS
https://github.com/webpack-contrib/mini-css-extract-plugin
*/
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: "html-loader", options: { minimize: true } }]
            },
            {
                test: /\.(png|jpe?g)/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "./img/[name].[ext]",
                            limit: 100000
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 8000
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};