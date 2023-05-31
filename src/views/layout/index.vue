<template>
  <el-container class="layout">
    <layout-side :visible.sync="showDrawer" />
    <el-container>
      <el-header class="hidden-md-and-up">
        <el-button type="primary" @click="showDrawer = true">打开</el-button>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutSide from "./components/layoutSide";

export default {
  data() {
    return {
      showDrawer: false, // 显示抽屉
    };
  },
  components: {
    layoutSide,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
</style>
