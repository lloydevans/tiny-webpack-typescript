const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
    /**
     * Build options.
     */
    env = { ...{ prod: false }, ...env };

    /**
     * @type {import("webpack").Configuration}
     */
    let config = {
        entry: './src/index.ts',

        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'build'),
            clean: true,
        },

        devtool: env.prod ? 'source-map' : 'eval-source-map',

        cache: {
            type: 'filesystem',
        },

        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                },
            ],
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.css'],
        },

        plugins: [
            // Auto generate HTML
            new HtmlWebpackPlugin({ title: 'tiny-webpack-typescript' }),
        ],

        mode: env.prod ? 'production' : 'development',
    };

    return config;
};
