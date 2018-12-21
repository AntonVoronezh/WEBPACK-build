const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './init.js',

    output: {

        filename: 'bundle.js',

        path: path.resolve(__dirname, 'dist')

    },

    plugins: [

        new webpack.DefinePlugin({

            VERSION: JSON.stringify('0.0.2'),
            PRODUCTION: false,
            HTML5_SUPPORT: true

        }),

        new webpack.ProvidePlugin({

            $: 'jquery'

        })

    ]


};
