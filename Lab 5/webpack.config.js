// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	
    mode: "development",
	
	// SERVER
    devServer: {
        static: {
          directory: path.join(__dirname, './'),
        },
        compress: true,
        port: 9000,
      },
	
	// ENTRY
    entry: {
    main: path.resolve(__dirname, './src/index.js'),
    },
	
	// OUTPUT
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    }, 
	
	// PLUGINS
    plugins: [
	
		new MiniCssExtractPlugin(),
		
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
	
	//RULES
	module: {
		rules: [
		  {
			test: /\.css$/i,
			use: [MiniCssExtractPlugin.loader, "css-loader"],
		  },
		],
	},
} 
