<!--
 * @Description: 404页面
 * @Author: YH
 * @Date: 2022-11-15 20:01:51
 * @LastEditTime: 2022-11-15 20:11:12
 * @LastEditors: YH
 * @Reference: 
-->
<template>
  <div class="error">
    <el-empty description="404">
      <el-button type="primary" @click="$router.replace({ name: 'home' })"
        >返回首页</el-button
      >
    </el-empty>
  </div>
</template>

<style lang="scss" scoped>
.error {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>