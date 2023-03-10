const webpack =  require("webpack");
const path = require("path");
const Dotenv = require("dotenv-webpack");
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
    resolve: {
        alias: {
          components: path.resolve(__dirname, 'src/components/'),
          pages: path.resolve(__dirname, 'src/pages/'),
          styles: path.resolve(__dirname, 'src/styles/'),
          store: path.resolve(__dirname, 'src/store/')
        },
        extensions: ['*', '.js', '.jsx', '.json', '.less'],
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
            },
            {
                test: /\.less$/i,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !production
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: !production,
                            lessOptions: {
                                modifyVars: {
                                    'primary-color': '#1890ff'
                                },
                                javascriptEnabled: true,
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|JPG|svg|gif|mp4|webm)?$/,
                loader: require.resolve('url-loader'),
                options: {
                    limit: 8192,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'image-webpack-loader',
                enforce: 'pre'
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
        }),
        new Dotenv()
    ],
    devServer: {
        port: 3001,
        hot: true,
        historyApiFallback: true
    },
    devtool: production ? "source-map" : "inline-source-map",
    mode: production ? 'production' : 'development'
}