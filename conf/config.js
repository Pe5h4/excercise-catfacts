module.exports = {
	app: {
	},
	webpackDevServer: {
		port: 3000,
		proxy: {
			'/api': {
				target: "http://localhost:8080",
				pathRewrite: { '^/api': ''}
			},
		}
	}
}
