<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\video\components\videoList\components\videoListItem.vue
 * @Author: YH
 * @Date: 2023-06-01 17:20:31
 * @LastEditors: YH
 * @LastEditTime: 2023-06-02 14:22:06
 * @Description: 视频-视频列表-子项
-->
<template>
  <div class="videoListItem">
    {{ item.title }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.videoListItem {
    border: $BORDERWIDTH solid $BORDERCOLOR_1;
    border-radius: $BORDERRADIUS_SMALL;
    background-color: $BACKGROUNDCOLOR_LIGHT;
    cursor: pointer;
    box-sizing: border-box;
    padding: 6px 10px;

    &:hover {
        border-color: $BASE_ACCENT;
    }
}
</style>