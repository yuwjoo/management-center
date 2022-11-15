<!--
 * @Description: 
 * @Author: YH
 * @Date: 2022-11-14 20:51:19
 * @LastEditTime: 2022-11-15 18:03:52
 * @LastEditors: YH
 * @Reference: 
-->
<template>
    <el-container class="layout">
        <el-header></el-header>
        <el-container>
            <el-aside width="200px">
                <com-nav-menu></com-nav-menu>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import comNavMenu from "./components/navMenu.vue"
export default {
    components: {
        comNavMenu
    }
}
</script>

<style lang="scss" scoped>
</style>