const path = require( 'path' )
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )


module.exports = {
    entry: './src/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve( __dirname, 'dist' )
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        open: true
    },

}
