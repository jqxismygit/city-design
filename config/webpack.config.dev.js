const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
    entry: './examples/index.js',
    mode: 'development',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, '../examples')
    },
    devServer: { // 
        contentBase: path.join(__dirname, '../examples'),
        compress: true,
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: '/node_modules/',
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },
        ]
    },
}

module.exports = merge(devConfig, baseConfig); 