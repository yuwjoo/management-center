const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true, // babel也会处理第三方依赖
  chainWebpack: (config) => {
    config.module.rules.delete("svg");
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, "src/assets/icons")) //处理svg目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
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
