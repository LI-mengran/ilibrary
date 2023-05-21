const { defineConfig } = require('@vue/cli-service')

const path = require('path');
const { config } = require('process');
const webpack = require('webpack')
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
	publicPath: './',
	// outputDir: 'dist', // 输出文件目录
	  // assetsDir: 'static', // 放置静态资源
	  // indexPath: 'index.html', // 可以不设置一般会默认
    configureWebpack: config =>{
		plugins:[
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			}),
			'@typescript-eslint'
		]
	},
	chainWebpack: config => {
        //路径配置
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/css'))
    },
	 

    // webpack-dev-server 相关配置  
  //   devServer: {
		// over
  //       // 调试端口
  //       // port: 8989
  //   },
	transpileDependencies: true,
	lintOnSave:false
    //其他配置....
}