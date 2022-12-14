/*
 * @Description: vue配置文件
 * @Author: YH
 * @Date: 2022-11-15 09:06:13
 * @LastEditTime: 2022-11-15 20:35:15
 * @LastEditors: YH
 * @Reference: 
 */
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true, // babel也会处理第三方依赖
	chainWebpack: (config) => {
		config.plugin('html').tap(args => {
			args[0].title = '系统';
			return args;
		})
	},
	css: {
		sourceMap: false,
		loaderOptions: {
			scss: {
				additionalData: `
					@import "~@/assets/css/variables.scss";
					@import "~@/assets/css/functions.scss";
				`
			},
		}
	},
})
