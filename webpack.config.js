const webpack =  require("webpack");
const path = require("path");
const { NetlifyPlugin } = require("netlify-webpack-plugin");
const production = process.env.NODE_ENV === 'production';


module.exports = {
    entry: {myAppName: path.resolve(__dirname, "./src/index.js")},
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: production ? '[main].[contenthash].js' : '[main].js',
        publicPath: '/'
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
        })
    ]
}