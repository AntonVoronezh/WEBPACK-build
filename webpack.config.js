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
                // use: ['style-loader', 'css-loader']
                // use: extractTextWebpack.extract({

                //     fallback: 'style-loader',
                //     use: ['css-loader', 'less-loader']

                // })
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
