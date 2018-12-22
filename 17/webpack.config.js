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

        rules: [

            {
                test: /\.js$/,
                loader: 'strip-loader',
                options: {
                    strip: ['console.*']
                }
            },

           
        ]

    },

    // plugins: [

    //     new extractTextWebpack({

    //         filename: 'styles.css',
    //         allChunks: true

    //     })

    // ]

};
