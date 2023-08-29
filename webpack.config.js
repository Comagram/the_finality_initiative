const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true, // <-- !!IMPORTANT!!
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                resolve: {
                  fullySpecified: false, // disable the behaviour
                },
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext]',
                },
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(jpg|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 8192,
                            name: '[name].[hash:7].[ext]',
                            publicPath: "/"
                        }
                    },
                ],

                type: 'javascript/auto'
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    entry: {
        index: path.resolve(__dirname, "src", "index.tsx")
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, "public", "page_icon.png"),
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'index.js',
        publicPath: '/'
    }

}