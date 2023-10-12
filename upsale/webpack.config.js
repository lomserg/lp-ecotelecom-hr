const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
        assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
    },
    module: {
        rules: [
         {
              test: /\.html$/,
              use: [
                  {
                    loader: 'html-loader',
                    options: { minimize: false }
                    }

                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [ MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',],
            },
            {
                   test: /\.(png|jpg|jpeg|gif)$/i,
                   type: 'asset/resource',
                 },
                 {
                   test: /\.svg$/,
                   type: 'asset/resource',
                   generator: {
                     filename: path.join('icons', '[name].[contenthash][ext]'),
                   },
                 },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src', 'template.html'),
          filename: 'index.html',
        }),
        new FileManagerPlugin({
          events: {
            onStart: {
            delete: ['dist'],
             },
         },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })
      ],
      devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
        },
}