const path = require('path');
const extractTextWebpack = require('extract-text-webpack-plugin');


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

        rules: [{

           test: /\.png$/,
           loader: 'file-loader',
           options: {
               name: '[path][name].[ext]'
           }          

           
        }]

    }


};
