<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\video\index.vue
 * @Author: YH
 * @Date: 2023-06-01 11:42:33
 * @LastEditors: YH
 * @LastEditTime: 2023-06-02 17:53:10
 * @Description: 视频模块
-->
<template>
  <div class="video">
    <!-- 搜索栏 start -->
    <video-search-bar @search="handleSearch" />
    <!-- 搜索栏 end -->

    <!-- 加载中 start -->
    <div v-show="loading" class="video_loading">
      <svg-icon icon="loading-bars" size="40px" />
    </div>
    <!-- 加载中 end -->

    <!-- 视频列表 start -->
    <video-list :list="list" />
    <!-- 视频列表 end -->

    <!-- 空状态 start -->
    <el-empty
      v-if="!loading && list.length === 0"
      description="暂无数据"
    ></el-empty>
    <!-- 空状态 end -->

    <!-- 分页 start -->
    <el-pagination
      v-show="list.length !== 0"
      layout="prev, pager, next, jumper"
      :current-page.sync="page.current"
      :page-size="page.size"
      :total="page.total"
      @current-change="handleCurrentChange"
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
        size: 10,
        total: 200,
      },
    };
  },
  created() {
    this.handleSearch();
  },
  methods: {
    /**
     * @name: 处理搜索
     */
    handleSearch(searchText) {
      this.searchText = searchText;
      this.$set(this.page, "current", 1);
      this.getData();
    },
    /**
     * @name: 获取数据
     */
    getData() {
      this.loading = true;
      this.list = Array.from({ length: 30 }).map(() => ({
        title: "海绵宝宝",
        cover: "http:www.baidu.com",
        url: "http:www.baidu.com",
      }));
      // this.loading = false;
    },
    /**
     * @name: 当前页改变
     * @param {number} current 当前页
     */
    handleCurrentChange(current) {
      this.$set(this.page, "current", current);
      this.getData();
    },
  },
  components: {
    videoSearchBar,
    videoList,
  },
};
</script>

<style lang="scss" scoped>
.video {
  .video_loading {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
  }

  .el-pagination {
    text-align: right;
  }
}
</style>
