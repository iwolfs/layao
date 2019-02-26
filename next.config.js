const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
module.exports = withCss(withLess({
	webpack(config, options) {
		config.module.rules.push({
			test: /\.less$/,
			use: [{
            loader: "less-loader", 
            options: {
            	javascriptEnabled: true,
              sourceMap: true
            }
        }]
		})
		return config
	}
}))