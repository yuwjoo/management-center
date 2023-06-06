<template>
  <div v-if="position === 'sticky' && !show" :style="`height: ${height}`"></div>
  <div v-else class="loading" :style="loadingStyle">
    <svg-icon v-show="show" icon="loading-bars" size="30px" />
  </div>
</template>

<script>
export default {
  props: {
    // 显示
    show: {
      type: Boolean,
      default: false,
    },
    // 定位方式
    position: {
      type: String,
      default: "sticky",
      validator: (val) => ["sticky", "fixed"].includes(val),
    },
    // 固定在屏幕中时的顶部偏移量
    offset: {
      type: String,
      default: "0px",
    },
    // 高度
    height: {
      type: String,
      default: "40px",
    },
  },
  computed: {
    // 加载组件样式
    loadingStyle() {
      return {
        position: this.position,
        top: this.offset,
        height: this.height,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>
