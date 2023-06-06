<!--
 * @FileName: 
 * @FilePath: \management-center\src\views\filmVideo\components\filmVideoList\components\filmVideoListItem.vue
 * @Author: YH
 * @Date: 2023-06-01 17:20:31
 * @LastEditors: YH
 * @LastEditTime: 2023-06-06 15:44:26
 * @Description: 视频-视频列表-子项
-->
<template>
  <div class="filmVideoListItem">
    <el-image
      class="filmVideoListItem_cover"
      :src="item.cover"
      :preview-src-list="[item.cover]"
      fit="cover"
    >
      <div slot="error" class="filmVideoListItem_cover_error">
        <svg-icon
          class="filmVideoListItem_cover_error_icon"
          icon="image-error"
          size="40px"
        />
      </div>
    </el-image>
    <div class="filmVideoListItem_content">
      <div class="filmVideoListItem_content_title">
        {{ item.title }}
      </div>
      <div class="filmVideoListItem_content_item filmVideoListItem_content_release">
        上映：{{ item.releaseTime }} / {{ item.country }}
      </div>
      <div class="filmVideoListItem_content_item filmVideoListItem_content_type">
        类型：{{ item.tags.join(" / ") }}
      </div>
      <div class="filmVideoListItem_content_options">
        <el-button
          type="primary"
          @click="
            $router.push({
              name: 'filmVideoPlay',
              query: { detailUrl: item.detailUrl },
            })
          "
          >在线播放</el-button
        >
        <el-tooltip
          content="下载视频"
          :hide-after="1000"
          :open-delay="200"
          :visible-arrow="false"
          placement="top-start"
        >
          <i
            class="filmVideoListItem_content_options_download el-icon-download"
          ></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";
export default {
  components: { SvgIcon },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.filmVideoListItem {
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

  .filmVideoListItem_cover {
    width: 100px;
    height: 100%;
    border: $BORDERWIDTH solid $BORDERCOLOR_1;
    box-sizing: border-box;

    :deep(.filmVideoListItem_cover_error) {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $BACKGROUNDCOLOR;
    }
  }

  .filmVideoListItem_content {
    margin-left: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;

    .filmVideoListItem_content_title {
      font-size: $FONTSIZE_3;
      margin-bottom: 10px;
      color: $FONTCOLOR_MAIN;
    }

    .filmVideoListItem_content_item {
      font-size: $FONTSIZE_1;
      color: $FONTCOLOR_SECONDARY;

      &.filmVideoListItem_content_release {
        @include f-text-wrap(1);
      }

      &.filmVideoListItem_content_type {
        @include f-text-wrap(2);
      }
    }

    .filmVideoListItem_content_options {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      .filmVideoListItem_content_options_download {
        font-size: 20px;
        margin-left: 20px;
        transform: translateY(-4px);

        &:hover {
          color: $BASE_ACCENT;
        }
      }
    }
  }
}
</style>
