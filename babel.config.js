/*
 * @Description: babel配置文件
 * @Author: YH
 * @Date: 2022-11-14 20:41:24
 * @LastEditTime: 2023-05-31 17:44:26
 * @LastEditors: YH
 * @Reference:
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
    "@babel/plugin-proposal-optional-chaining",
  ],
};
