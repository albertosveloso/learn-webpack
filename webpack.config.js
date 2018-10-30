const webpack = require('webpack')

import react from 'React'

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devserver: {
        port: 8080,
        contentBase: './public'
    }
}