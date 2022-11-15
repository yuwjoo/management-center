<!--
 * @Description: 
 * @Author: YH
 * @Date: 2022-11-14 20:51:19
 * @LastEditTime: 2022-11-15 21:03:31
 * @LastEditors: YH
 * @Reference: 
-->
<template>
  <el-container class="layout">
    <el-header class="layout_header"></el-header>
    <el-container>
      <el-aside class="layout_aside" width="200px">
        <com-nav-menu class="layout_aside_navmenu"></com-nav-menu>
      </el-aside>
      <el-main class="layout_main">
        <com-breadcrumb />
        <router-view id="main" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import comNavMenu from "./components/navMenu";
import comBreadcrumb from "./components/breadcrumb"

export default {
  components: {
    comNavMenu,
    comBreadcrumb
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  .layout_header {
    background-color: $BASE--PRIMARY;
    height: $HEADER_HEIGHT !important;
  }
  .layout_aside {
    .layout_aside_navmenu {
        height: 100%;
    }
  }
  .layout_main {
  }
}
</style>