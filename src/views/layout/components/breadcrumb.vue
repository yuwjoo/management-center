<!--
 * @Description: 面包屑导航
 * @Author: YH
 * @Date: 2022-11-15 20:53:12
 * @LastEditTime: 2022-11-15 21:12:43
 * @LastEditors: YH
 * @Reference: 
-->
<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item
      v-for="(route, index) in routeList"
      :key="index"
      :to="route.to"
      >{{ route.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
export default {
  computed: {
    // 路由列表
    routeList() {
      return (this.$route.matched || []).slice(1).map((route) => ({
        title: route.meta.title,
        to: this.$route.name !== route.name ? { name: route.name } : undefined,
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
    margin-bottom: 20px;
}
</style>