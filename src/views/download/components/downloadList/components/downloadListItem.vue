<template>
  <div class="downloadListItem">
    <div class="downloadListItem_cover">
      <el-image :src="fileCover" />
    </div>
    <div class="downloadListItem_main">
      <div class="downloadListItem_main_name">{{ item.name }}</div>
      <div class="downloadListItem_main_url">{{ item.url }}</div>
    </div>
    <el-progress
      class="downloadListItem_main_progress"
      :percentage="item.progress"
    ></el-progress>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // 文件封面图
    fileCover() {
      return require("@/assets/image/file-cover-image.png");
    },
  },
};
</script>

<style lang="scss" scoped>
.downloadListItem {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  border-bottom: $BORDERWIDTH solid $BORDERCOLOR_1;
  padding-bottom: 6px;

  &:not(:first-child) {
    padding-top: 6px;
  }

  .downloadListItem_cover {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .downloadListItem_main {
    margin: 0 0 6px 6px;
    flex-grow: 1;
    width: 0;

    .downloadListItem_main_name {
      font-size: $FONTSIZE_2;
    }

    .downloadListItem_main_url {
      font-size: $FONTSIZE_0;
      margin-top: 3px;
      color: $FONTCOLOR_SECONDARY;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .downloadListItem_main_progress {
    width: 100%;
  }
}
</style>
