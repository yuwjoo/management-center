<!--
 * @Description: 图表页面
 * @Author: YH
 * @Date: 2022-11-15 20:03:39
 * @LastEditTime: 2022-11-15 21:38:18
 * @LastEditors: YH
 * @Reference: 
-->
<template>
    <div class="charts">
        <com-fund-card title="折线图" />
    </div>
</template>

<script>
import comFundCard from "./components/fundCard"

export default {
    components: {
        comFundCard
    }
}
</script>