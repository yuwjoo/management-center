<template>
  <el-header class="layoutHeader hidden-md-and-up">
    <!-- 非子页，头部是菜单按钮 start -->
    <template v-if="!$route.meta.childPage">
      <svg-icon
        class="layoutHeader_icon"
        :icon="isOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        @click.native="$emit('toggle')"
      />
      <div class="layoutHeader_title">{{ $route.meta.title }}</div>
      <el-badge
        class="layoutHeader_badge"
        :value="100"
        :max="99"
        :hidden="!true"
        is-dot
      >
        <svg-icon
          class="layoutHeader_icon layoutHeader_badge_downloadIcon"
          icon="download"
          @click.native="$router.push({ name: 'downloadChildPage' })"
        />
      </el-badge>
    </template>
    <!-- 非子页，头部是菜单按钮 end -->

    <!-- 子页，头部需要返回按钮 start -->
    <template v-else>
      <svg-icon
        class="layoutHeader_icon"
        icon="el-icon-arrow-left"
        @click.native="$router.back()"
      />
      <div class="layoutHeader_title">{{ $route.meta.title }}</div>
    </template>
    <!-- 子页，头部需要返回按钮 end -->
  </el-header>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.layoutHeader {
  border-bottom: $BORDERWIDTH solid $BORDERCOLOR_1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .layoutHeader_icon {
    font-size: $FONTSIZE_5;
    cursor: pointer;
  }

  .layoutHeader_title {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }

  .layoutHeader_badge {
    :deep(.el-badge__content) {
      top: -2px;
    }

    .layoutHeader_badge_downloadIcon {
      font-size: $FONTSIZE_3;
      transform: translateY(-2px);
    }
  }
}
</style>
