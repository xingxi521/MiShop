module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    }
}