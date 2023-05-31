<template>
  <el-container class="layout">
    <el-aside class="hidden-sm-and-down" width="220px">侧边栏</el-aside>
    <el-container>
      <el-header class="hidden-md-and-up">
        <el-button type="primary" @click="showDrawer = true">打开</el-button>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-drawer
        class="hidden-md-and-up"
        :with-header="false"
        :show-close="false"
        :modal="false"
        :visible.sync="showDrawer"
        direction="ltr"
        size="220px"
      >
      </el-drawer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      showDrawer: false, // 显示抽屉
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;

  .el-aside {
    background-color: $SIDEBAR_BACKGROUNDCOLOR;
  }
}
</style>
