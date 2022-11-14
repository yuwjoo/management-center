/*
 * @Description: babel配置文件
 * @Author: YH
 * @Date: 2022-11-14 20:41:24
 * @LastEditTime: 2022-11-14 22:20:01
 * @LastEditors: YH
 * @Reference: 
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset", ["es2015", { modules: false }]],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
