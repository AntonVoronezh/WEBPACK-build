const path = require('path');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './a',

    output: {

        filename: 'bundle.js',

        path: path.resolve(__dirname, 'dist')

    },

    devtool: 'source-map',

    resolve: {

        extensions: ['.js']

    },

    watch: false

};
