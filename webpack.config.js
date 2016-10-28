module.exports = {
    entry: {
        index: './src/index'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name]-[hash].js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};
