<!--
 * @FileName: 
 * @FilePath: \management-center\src\components\SvgIcon.vue
 * @Author: YH
 * @Date: 2023-06-02 19:31:24
 * @LastEditors: YH
 * @LastEditTime: 2023-06-03 14:57:23
 * @Description: 图标组件
-->
<template>
  <i v-if="isElementUIIcon" :class="icon" :style="currentIconStyle" />
  <svg v-else class="svgIcon" aria-hidden="true" :style="currentIconStyle">
    <use :xlink:href="currentIcon" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",
  props: {
    // 图标
    icon: {
      type: String,
      required: true,
    },
    // 大小
    size: {
      type: String,
    },
    // 颜色
    color: {
      type: String,
    },
  },
  computed: {
    // 是element-ui图标
    isElementUIIcon() {
      return /^el-icon-/i.test(this.icon);
    },
    // 图标 el-icon-house
    currentIcon() {
      const isUrl = /^(http|https):\/\//i.test(this.icon);
      return isUrl || this.isElementUIIcon ? this.icon : `#icon-${this.icon}`;
    },
    // 图标样式
    currentIconStyle() {
      return {
        fontSize: this.size,
        color: this.color,
      };
    },
  },
};
</script>

<style scoped>
.svgIcon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
