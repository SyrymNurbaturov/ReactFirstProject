const webpack =  require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { NetlifyPlugin } = require("netlify-webpack-plugin");
const production = process.env.NODE_ENV === 'production';


module.exports = {
    entry: {myAppName: path.resolve(__dirname, "./src/index.js")},
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: production ? '[main].[contenthash].js' : '[main].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            'import',
                            {libraryName: "antd", style: true},
                            'antd',
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !production
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new NetlifyPlugin({
            redirects: [
                {
                    from: "/*",
                    to: "/index.html",
                    status: 200
                }
            ]
        }),
        new HtmlWebpackPlugin({
            title: "My blog",
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[main].[contenthash].css' : '[main].css'
        })
    ],
    mode: production ? 'production' : 'development'
}