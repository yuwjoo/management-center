<template>
  <el-container class="layout" direction="horizontal">
    <layout-side :visible.sync="showDrawer" />
    <el-container direction="vertical">
      <layout-header :is-open="showDrawer" @toggle="showDrawer = !showDrawer" />
      <el-main id="main">
        <keep-alive>
          <router-view />
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutSide from "./components/layoutSide";
import layoutHeader from "./components/layoutHeader";

export default {
  data() {
    return {
      showDrawer: false, // 显示侧边栏抽屉
    };
  },
  components: {
    layoutSide,
    layoutHeader,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;

  #main {
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: $BACKGROUNDCOLOR;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $BACKGROUNDCOLOR_ACTIVE;
      border-radius: $BORDERRADIUS_ROUND;

      &:hover {
        background-color: $FONTCOLOR_PLACEHOLDER;
      }
    }
  }
}
</style>
