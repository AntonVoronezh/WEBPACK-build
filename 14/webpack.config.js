const path = require('path');
const extractTextWebpack = require('extract-text-webpack-plugin');


module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {

        index: './index',
        styles: './styles.css'

    },

    output: {

        filename: '[name].js',

        path: path.resolve(__dirname, 'dist')

    },

    module: {

        rules: [

            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: extractTextWebpack.extract({

                    fallback: 'style-loader',
                    use: 'css-loader'

                })
            }

        ]

    },

    plugins: [

        new extractTextWebpack('[name].css')

    ]

};
