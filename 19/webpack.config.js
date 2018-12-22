const path = require('path');
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

    plugins: [

        new htmlPlugin({

            title: 'webpack dev server'

        })

    ]


};
