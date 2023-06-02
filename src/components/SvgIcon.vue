<!--
 * @FileName: 
 * @FilePath: \management-center\src\components\SvgIcon.vue
 * @Author: YH
 * @Date: 2023-06-02 19:31:24
 * @LastEditors: YH
 * @LastEditTime: 2023-06-02 19:38:10
 * @Description: 图标组件
-->
<template>
  <svg class="svgIcon" aria-hidden="true" :style="currentIconStyle">
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
    // 图标
    currentIcon() {
      let icon = "";

      if (/^(http|https):\/\//i.test(icon)) {
        icon = this.icon;
      } else {
        icon = "#icon-" + this.icon;
      }

      return icon;
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
