const path = require('path');
const caseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './init.js',

    output: {

        filename: 'bundle.js',

        path: path.resolve(__dirname, 'dist')

    },

    plugins: [

        new caseSensitivePathsPlugin()

    ]

    
};
