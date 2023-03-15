// webpack.config.js
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    devServer: {
        static: {
          directory: path.join(__dirname, './'),
        },
        compress: true,
        port: 9000,
      },
    entry: {
    main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html', // ім'я вихідного файлу
            }),

        new HtmlWebpackPlugin({
            title: 'news',
            template: path.resolve(__dirname, './src/pages/news.html'),
            filename: 'news.html', // ім'я вихідного файлу
            }),
			
		new HtmlWebpackPlugin({
            title: 'photo',
            template: path.resolve(__dirname, './src/pages/photo.html'),
            filename: 'photo.html', // ім'я вихідного файлу
            }),
			
		new HtmlWebpackPlugin({
			title: 'rozklad',
			template: path.resolve(__dirname, './src/pages/rozklad.html'),
			filename: 'rozklad.html', // ім'я вихідного файлу
			}),
			
		new CopyWebpackPlugin({
			patterns: [
				{
					 from: 'src/assets/images',
					 to: '../dist',
				},
				],
			}),

        new CleanWebpackPlugin(),
    ], 
} 
