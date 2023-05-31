<!--
 * @Description: 页面入口
 * @Author: YH
 * @Date: 2022-11-14 20:41:24
 * @LastEditTime: 2023-05-31 16:24:14
 * @LastEditors: YH
 * @Reference: 
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  height: 100%;
  font-size: $FONTSIZE;
  color: $FONTCOLOR_REGULAR;
  background-color: $BACKGROUNDCOLOR;
  line-height: $LINEHEIGHT_MEDIUM;
}
</style>
