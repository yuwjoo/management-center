<template>
  <div class="sideMenu">
    <div class="sideMenu_item" v-for="(item, index) in list" :key="index">
      <i :class="['sideMenu_item_icon', item.icon]"></i>
      <span class="sideMenu_item_label">{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    /**
     * @name: 初始化
     */
    init() {
      this.list = [
        { icon: "el-icon-house", label: "主页", name: "home" },
        { icon: "el-icon-video-camera", label: "视频", name: "video" },
        { icon: "el-icon-box", label: "仓库", name: "box" },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.sideMenu {
  display: flex;
  flex-direction: column;
  .sideMenu_item {
    font-size: $FONTSIZE_4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    .sideMenu_item_icon {
      font-weight: bold;
    }
  }
}
</style>
