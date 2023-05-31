const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true, // babel也会处理第三方依赖
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "系统";
      return args;
    });
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      scss: {
        additionalData: `
					@import "~@/assets/css/var.scss";
					@import "~@/assets/css/functions.scss";
				`,
      },
    },
  },
});
