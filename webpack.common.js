const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = false;

module.exports = {
    entry: [
        './src/toggle_menu.js',
        './src/calls_apis.js'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: devMode ? 'main.js' : 'main.[hash].js',
    },
    plugins: [
        new BundleTracker({
            filename: './webpack-stats.json'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'scss/eazy.scss'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    },
}