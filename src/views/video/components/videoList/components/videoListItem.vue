<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\video\components\videoList\components\videoListItem.vue
 * @Author: YH
 * @Date: 2023-06-01 17:20:31
 * @LastEditors: YH
 * @LastEditTime: 2023-06-02 23:01:58
 * @Description: 视频-视频列表-子项
-->
<template>
  <div class="videoListItem">
    <el-image
      class="videoListItem_cover"
      :src="item.cover"
      :preview-src-list="[item.cover]"
      fit="cover"
    >
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
    <div class="videoListItem_content">
      <div class="videoListItem_content_title">
        {{ item.title }}
      </div>
      <div class="videoListItem_content_item videoListItem_content_release">
        上映：{{ item.releaseTime }} / {{ item.country }}
      </div>
      <div class="videoListItem_content_item videoListItem_content_type">
        类型：{{ item.tags.join(" / ") }}
      </div>
      <div class="videoListItem_content_options">
        <el-tooltip
          content="播放视频"
          :hide-after="1000"
          :open-delay="200"
          :visible-arrow="false"
          placement="top-start"
        >
          <i
            class="videoListItem_content_options_button el-icon-caret-right"
          ></i>
        </el-tooltip>
        <el-tooltip
          content="下载视频"
          :hide-after="1000"
          :open-delay="200"
          :visible-arrow="false"
          placement="top-start"
        >
          <i class="videoListItem_content_options_button el-icon-download"></i>
        </el-tooltip>
      </div>
    </div>
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
};
</script>

<style lang="scss" scoped>
.videoListItem {
  border: $BORDERWIDTH solid $BORDERCOLOR_1;
  border-radius: $BORDERRADIUS_SMALL;
  background-color: $BACKGROUNDCOLOR_LIGHT;
  cursor: pointer;
  box-sizing: border-box;
  padding: 6px 10px;
  display: flex;

  &:hover {
    border-color: $BASE_ACCENT;
  }

  .videoListItem_cover {
    width: 100px;
    height: 100%;

    :deep(.image-slot) {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      border: $BORDERWIDTH solid $BORDERCOLOR_1;
      box-sizing: border-box;
    }
  }

  .videoListItem_content {
    margin-left: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;

    .videoListItem_content_title {
      font-size: $FONTSIZE_3;
      margin-bottom: 10px;
      color: $FONTCOLOR_MAIN;
    }

    .videoListItem_content_item {
      font-size: $FONTSIZE_1;
      color: $FONTCOLOR_SECONDARY;

      &.videoListItem_content_release {
        @include f-text-wrap(1);
      }

      &.videoListItem_content_type {
        @include f-text-wrap(2);
      }
    }

    .videoListItem_content_options {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      .videoListItem_content_options_button {
        font-size: 20px;

        &:not(:first-child) {
          margin-left: 20px;
        }

        &:hover {
          color: $BASE_ACCENT;
        }
      }
    }
  }
}
</style>
