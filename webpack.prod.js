const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// App
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true,
					},
				},
			}),
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: 'public/images/**/*',
					to: './images/[name].[ext]'
				}
			]
		})
	],
});