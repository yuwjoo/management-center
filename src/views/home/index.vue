<!--
 * @Description: 
 * @Author: YH
 * @Date: 2022-11-14 20:51:14
 * @LastEditTime: 2023-05-31 14:24:51
 * @LastEditors: YH
 * @Reference: 
-->
<template>
    <div class="home">
    </div>
</template>

<script>
// import vvcTable from 'vue2-vant2-components/lib/vvc-table';
// import 'vue2-vant2-components/lib/vvc-table/style';
// import vvcTableColumn from 'vue2-vant2-components/lib/vvc-table-column';
// import 'vue2-vant2-components/lib/vvc-table-column/style';

// console.log(vvcTable)
export default {
    data() {
        return {
            bb: "",
            aa: "",
            list: [],
            list1: [
                { label: 4, value: 4 },
                { label: 2, value: 2 },
                { label: 3, value: 3 }
            ]
        }
    },
    created() {
        this.list = Array(100).fill([
            { id: 1, name: "速度快放假", size: 45 },
            { id: 2, name: "速度快放假23423", size: 335 },
            { id: 3, name: "速度快放假324", size: 459 },
        ]).reduce((arr, newArr) => [...arr, ...newArr], [])
    },
    components: {
        // vvcTable,
        // vvcTableColumn
    }
}
</script>

<style lang="scss" scoped>
</style>