const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    // 基本路径
    publicPath: '/factory/',
    // 输出文件目录
    outputDir: 'factory',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: process.env.NODE_ENV !== 'production',
    transpileDependencies: ['iview','./src/assets/laydate/laydate.js'],
    chainWebpack: config => {
        config.resolve.alias.set('images', resolve('src/assets/images'));
        config.module.rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                bypassOnDebug: true
            })
            .end();
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // webpack-dev-server 相关配置
    devServer: {
        proxy: {
            '/nodeapi/QTach/': {
                 target: 'http://localhost:5001/',
                // target: 'https://txqa.ziyun-cloud.com/',
                // target: 'http://ems.qtech.com/',
                changeOrigin: true,
                ws: true,
                pathRequiresRewrite: {
                    '^/nodeapi': '/'
                }
            },
            // 设置代理
            '/service': {
                target: 'http://10.170.6.41',
                // target: 'http://ems.qtech.com/',
                // target: 'http://localhost:9000',
                changeOrigin: true,
                ws: true,
                pathRequiresRewrite: {
                    '^/service': '/'
                }
            },
            '/factoryPortal': {
                target: 'http://10.170.6.41',
                // target: 'http://ems.qtech.com/',
                // target: 'http://localhost:9000',
                changeOrigin: true,
                ws: true,
                pathRequiresRewrite: {
                    '^/factoryPortal': '/'
                }
            },
            '/nodeapi': {
                target: 'http://10.170.6.41',
                // target: 'http://localhost:9000',
                // target: 'http://ems.qtech.com/',
                changeOrigin: true,
                ws: true,
                pathRequiresRewrite: {
                    '^/nodeapi': '/'
                }
            },
        },
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
};