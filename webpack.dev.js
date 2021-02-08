const path = require('path');
const { merge } = require('webpack-merge');

// App
const common = require('./webpack.common');

module.exports = merge(common, {
    devtool: 'eval-cheap-module-source-map',
    mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		open: true,
		port: 8081
	},
	watch: true
});