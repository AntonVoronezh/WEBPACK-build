const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {

        index: './index.js',
        shop: './shop.js'
    },

    output: {

        filename: '[name].js',

        path: path.resolve(__dirname, 'dist')

    },

    plugins: [

        new htmlWebpackPlugin({

            title: 'aaaaaaaa',
            hash: true,
            minify: {
                html5: true
            },
            template: './template.html'

        })

    ]


};
