<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\video\index.vue
 * @Author: YH
 * @Date: 2023-06-01 11:42:33
 * @LastEditors: YH
 * @LastEditTime: 2023-06-01 17:52:43
 * @Description: 视频模块
-->
<template>
  <div class="video">
    <!-- 搜索栏 start -->
    <video-search-bar @search="handleSearch" />
    <!-- 搜索栏 end -->

    <!-- 视频列表 start -->
    <video-list :list="list" />
    <!-- 视频列表 end -->

    <!-- 分页 start -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="page.current"
      :page-size="page.size"
      layout="prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>
    <!-- 分页 end -->
  </div>
</template>

<script>
import videoSearchBar from "./components/videoSearchBar";
import videoList from "./components/videoList";

export default {
  data() {
    return {
      searchText: "", // 模糊搜索值
      loading: false, // 加载中
      list: [], // 列表数据
      page: {
        current: 1,
        size: 100,
        total: 200,
      },
    };
  },
  methods: {
    /**
     * @name: 处理搜索
     */
    handleSearch(searchText) {
      this.searchText = searchText;
    },
    /**
     * @name: 获取数据
     */
    getData() {},
    handleSizeChange() {},
    handleCurrentChange() {},
  },
  components: {
    videoSearchBar,
    videoList,
  },
};
</script>
