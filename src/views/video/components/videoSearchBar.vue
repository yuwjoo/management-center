<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\video\components\videoSearchBar.vue
 * @Author: YH
 * @Date: 2023-06-01 11:48:28
 * @LastEditors: YH
 * @LastEditTime: 2023-06-02 17:50:50
 * @Description: 视频-搜索栏
-->
<template>
  <div class="videoSearchBar">
    <el-input
      v-model="searchText"
      class="videoSearchBar_input"
      placeholder="请输入要搜索的影片"
      clearable
      @keyup.enter="$emit('search', searchText)"
    >
      <template v-slot:prefix>
        <i class="videoSearchBar_input_icon el-icon-search"></i>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "", // 模糊搜索值
    };
  },
};
</script>

<style lang="scss" scoped>
.videoSearchBar {
  padding: 10px 0 20px;
  .videoSearchBar_input {
    :deep(.el-input__inner) {
      height: 35px;
      line-height: 35px;
    }
    .videoSearchBar_input_icon {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateX(5px);
    }
  }
}
</style>
