<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\filmVideo\components\filmVideoSearchBar.vue
 * @Author: YH
 * @Date: 2023-06-01 11:48:28
 * @LastEditors: YH
 * @LastEditTime: 2023-06-02 20:42:51
 * @Description: 视频-搜索栏
-->
<template>
  <div class="filmVideoSearchBar">
    <el-input
      v-model="searchText"
      class="filmVideoSearchBar_input"
      type="search"
      placeholder="请输入要搜索的影片"
      clearable
      @keyup.enter.native="$emit('search', searchText)"
    >
      <template v-slot:prefix>
        <i class="filmVideoSearchBar_input_icon el-icon-search"></i>
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
.filmVideoSearchBar {
  text-align: center;

  .filmVideoSearchBar_input {
    max-width: 1000px;

    :deep(.el-input__inner) {
      height: 35px;
      line-height: 35px;
      border-color: $FONTCOLOR_PLACEHOLDER;

      &::-webkit-search-cancel-button {
        display: none;
      }

      &:hover,
      &:focus {
        border-color: $BASE_ACCENT;
      }
    }

    .filmVideoSearchBar_input_icon {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateX(5px);
    }
  }
}
</style>
