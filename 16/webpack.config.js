const path = require('path');
const extractTextWebpack = require('extract-text-webpack-plugin');


module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {

        index: './index',
        vendor: ['jquery']

    },

    output: {

        filename: '[name].js',

        path: path.resolve(__dirname, 'dist')

    },

    module: {

        rules: [

            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$'
            },

            {
                test: /no-export.js/,
                loader: 'exports-loader?hiddenConst'
            }

        ]

    },

    // plugins: [

    //     new extractTextWebpack({

    //         filename: 'styles.css',
    //         allChunks: true

    //     })

    // ]

};
