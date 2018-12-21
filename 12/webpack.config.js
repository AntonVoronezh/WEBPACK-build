const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {

        index: './index',
        shop: './shop',
        profile: './profile',
        vendor: ['jquery', 'lodash']
    },

    output: {

        filename: '[name].js',

        path: path.resolve(__dirname, 'dist')

    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({

            name: ['common', 'vendor'],
            minChunks: 2


        })

    ]


};
