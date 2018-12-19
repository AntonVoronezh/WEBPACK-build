const path = require('path');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {

        home: './Home',

        shop: './Shop',

        profile: './Profile'

    },

    output: {

        filename: '[name].js',

        path: path.resolve(__dirname, 'dist')

    },

    resolve: {

        extensions: ['.js']

    },

    watch: false

};
