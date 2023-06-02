<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\video\index.vue
 * @Author: YH
 * @Date: 2023-06-01 11:42:33
 * @LastEditors: YH
 * @LastEditTime: 2023-06-02 22:09:23
 * @Description: 视频模块
-->
<template>
  <div class="video">
    <!-- 搜索栏 start -->
    <video-search-bar @search="handleSearch" />
    <!-- 搜索栏 end -->

    <!-- 加载中 start -->
    <div v-show="loading" class="video_loading">
      <svg-icon icon="loading-bars" size="30px" />
    </div>
    <!-- 加载中 end -->

    <!-- 占位块 start -->
    <div v-show="!loading" class="video_placeholderBlock"></div>
    <!-- 占位块 end -->

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
      hide-on-single-page
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
        size: 16,
        total: 0,
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
      setTimeout(() => {
        const resp = require("./searchData.json");
        this.list = resp.list;
        this.$set(this.page, "current", Number(resp.pageNum));
        this.$set(this.page, "size", resp.pageSize);
        this.$set(this.page, "total", resp.total);
        this.loading = false;
      }, 2000);
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
    padding: 5px 0;
    z-index: 99;
  }

  .video_placeholderBlock {
    height: 40px;
  }

  .el-pagination {
    padding: 0;
    text-align: right;
    position: fixed;
    bottom: 20px;
    right: 20px;
    left: 20px;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
</style>
