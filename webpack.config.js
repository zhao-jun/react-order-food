const webpack = require('webpack');
const path = require('path');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 动态插入bundle好的js到index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = (options = {}) => {

    return {
        entry: [
            path.resolve(__dirname, 'src/index.js')
        ],
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle[hash].js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: path.resolve(__dirname, 'src'),
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {test: /\.js[x]?$/, exclude: /node_modules/, use: 'babel-loader'},
                // { test: /\.(png|jpg)$/, use: 'file-loader'},
                {test: /\.(png|jpg)$/, use: [{loader: 'url-loader', options: {limit: 10000}}]}
                //可以使/开头的文件相对于root目录解析
                // {test: /\.html$/, use: [{loader: 'html-loader', options: {root: path.resolve(__dirname, 'src'), attrs: ['img:src', 'link:href']}}]}
            ]
        },
        plugins: [
            HTMLWebpackPluginConfig,
            //热加载插件
            new webpack.HotModuleReplacementPlugin()
            // new OpenBrowserPlugin({ url: 'http://localhost:8080' })
        ],
        resolve: {
            alias: {
                '~': path.resolve(__dirname, 'src')
            }
        }
    }
};