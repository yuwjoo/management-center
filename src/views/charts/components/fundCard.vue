<template>
  <el-card class="fundCard" shadow="hover">
    <template slot="header">{{title}}</template>
    <div class="fundCard_chart" ref="chart"></div>
  </el-card>
</template>

<script>
export default {
  props: {
    // 标题
    title: {
      type: String,
    },
    // 数据列表
    list: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      myChart: null, // 图表实例
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    /**
     * @name: 初始化
     */
    init() {
      this.myChart = this.$echarts.init(this.$refs.chart);
      this.myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.fundCard {
    .fundCard_chart {
        height: 300px;
    }
}
</style>