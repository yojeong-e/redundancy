
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/goorm', {
            target: 'https://redundancyfacility1.run.goorm.io/',
            pathRewrite: {
                '^/goorm':''
            },
            changeOrigin: true
        })
    )

};