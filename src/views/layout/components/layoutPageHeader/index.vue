<template>
  <el-page-header
    v-if="$route.meta.childPage"
    class="pageHeader hidden-sm-and-down"
    :content="$route.meta.title"
    @back="$router.back()"
  ></el-page-header>
</template>

<style lang="scss" scoped>
.pageHeader {
  margin-bottom: 20px;
}
</style>
