<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\video\components\videoList\index.vue
 * @Author: YH
 * @Date: 2023-06-01 11:48:38
 * @LastEditors: YH
 * @LastEditTime: 2023-06-02 17:50:29
 * @Description: 视频-视频列表
-->
<template>
  <div class="videoList">
    <video-list-item
      class="videoList_item"
      v-for="(item, index) in list"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import videoListItem from "./components/videoListItem";

export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    videoListItem,
  },
};
</script>

<style lang="scss" scoped>
.videoList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  gap: 20px;
  justify-content: center;
  padding: 20px 0 10px;

  .videoList_item {
    height: 125px;
  }
}
</style>
