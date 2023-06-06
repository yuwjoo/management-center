<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\filmVideo\index.vue
 * @Author: YH
 * @Date: 2023-06-01 11:42:33
 * @LastEditors: YH
 * @LastEditTime: 2023-06-06 22:15:33
 * @Description: 视频模块
-->
<template>
  <div class="filmVideo">
    <!-- 搜索栏 start -->
    <film-video-search-bar @search="handleSearch" />
    <!-- 搜索栏 end -->

    <!-- 加载中 start -->
    <com-loading :show="loading" />
    <!-- 加载中 end -->

    <!-- 视频列表 start -->
    <film-video-list :list="list" />
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
import comLoading from "@/components/Loading";
import filmVideoSearchBar from "./components/filmVideoSearchBar";
import filmVideoList from "./components/filmVideoList";
import { searchFilmVideo } from "@/api/filmVideo";

export default {
  name: "filmVideo",
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
      searchFilmVideo({
        keywords: this.searchText,
        pageNum: this.page.current,
      })
        .then((res) => {
          this.list = res.list || [];
          this.$set(this.page, "current", Number(res.pageNum));
          this.$set(this.page, "size", res.pageSize);
          this.$set(this.page, "total", res.total);
        })
        .finally(() => {
          this.loading = false;
        });
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
    comLoading,
    filmVideoSearchBar,
    filmVideoList,
  },
};
</script>

<style lang="scss" scoped>
.filmVideo {
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
