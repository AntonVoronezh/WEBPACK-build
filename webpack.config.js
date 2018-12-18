const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: '[name].js'
        
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack +++++++'
        })
    ]
};



//   module.exports = {
//     entry: './src/index.js',
//     output: {
//       filename: 'main.js',
//       path: path.resolve(__dirname, 'dist')
//     }
//   };