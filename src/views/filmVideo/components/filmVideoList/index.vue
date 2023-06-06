<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\filmVideo\components\filmVideoList\index.vue
 * @Author: YH
 * @Date: 2023-06-01 11:48:38
 * @LastEditors: YH
 * @LastEditTime: 2023-06-06 15:43:41
 * @Description: 视频-视频列表
-->
<template>
  <div class="filmVideoList">
    <film-video-list-item
      class="filmVideoList_item"
      v-for="(item, index) in list"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import filmVideoListItem from "./components/filmVideoListItem";

export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    filmVideoListItem,
  },
};
</script>

<style lang="scss" scoped>
.filmVideoList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;

  .filmVideoList_item {
    height: 150px;
  }
}
</style>
