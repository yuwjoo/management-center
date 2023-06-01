<template>
  <div class="sideMenu">
    <div
      :class="[
        'sideMenu_item',
        {
          'is-active': $route.name === item.name,
        },
      ]"
      v-for="(item, index) in list"
      :key="index"
      @click="handleClickItem(item)"
    >
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
        { icon: "el-icon-box", label: "仓库", name: "store" },
      ];
    },
    /**
     * @name: 点击子项
     * @param {object} item 当前选中项
     */
    handleClickItem(item) {
      if (this.$route.name !== item.name) {
        this.$router.push({ name: item.name });
      }
      this.$emit("click-item", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.sideMenu {
  display: flex;
  flex-direction: column;
  padding: 6px 10px;
  margin-top: 10vh;
  .sideMenu_item {
    font-size: $FONTSIZE_1;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: font-size 0.1s;
    border-radius: $BORDERRADIUS_SMALL;
    padding: 10px 0;
    margin: 10px 0;
    user-select: none;

    &:hover,
    &.is-active {
      background-color: $BACKGROUNDCOLOR_ACTIVE;
    }

    .sideMenu_item_icon {
      font-size: $FONTSIZE_3;
    }

    .sideMenu_item_label {
      margin-top: 10px;
    }
  }
}
</style>
