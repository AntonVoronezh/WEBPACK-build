const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');


module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {

        index: './index',

    },

    output: {

        filename: 'bundle.js',

        path: path.resolve(__dirname, 'dist')

    },

    module: {

        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }



        ]

    },

    plugins: [

        new htmlPlugin({

            title: 'webpack dev server'

        }),

        new webpack.HotModuleReplacementPlugin()

    ],

    devServer: {

        hot: true

    }


};
