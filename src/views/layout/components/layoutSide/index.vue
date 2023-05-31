<template>
  <div class="layoutSide">
    <!-- 侧边栏 start -->
    <el-aside class="hidden-sm-and-down" width="220px">
      <side-menu />
    </el-aside>
    <!-- 侧边栏 end -->

    <!-- 抽屉式侧边栏 start -->
    <el-drawer
      class="hidden-md-and-up"
      :with-header="false"
      :show-close="false"
      :modal="false"
      :visible="visible"
      direction="ltr"
      size="220px"
      @update:visible="$emit('update:visible', $event)"
    >
      <side-menu />
    </el-drawer>
    <!-- 抽屉式侧边栏 end -->
  </div>
</template>

<script>
import sideMenu from "./components/sideMenu";

export default {
  props: {
    // 显示抽屉式侧边栏（.sync）
    visible: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    /**
     * @name: 处理窗口大小改变
     */
    handleResize() {
      if (window.innerWidth >= 992 && this.visible) {
        this.$emit("update:visible", false);
      }
    },
  },
  components: {
    sideMenu,
  },
};
</script>

<style lang="scss" scoped>
.layoutSide {
  .el-aside {
    background-color: $SIDEBAR_BACKGROUNDCOLOR;
    border-right: 1px solid $BORDERCOLOR;
    height: 100%;
  }

  .el-drawer__wrapper {
    :deep(.el-drawer.ltr) {
      box-shadow: none;
      border-right: 1px solid $BORDERCOLOR;
    }
  }
}
</style>
