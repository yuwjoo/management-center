<template>
  <el-header class="layoutHeader hidden-md-and-up">
    <svg-icon
      class="layoutHeader_toggleIcon"
      :icon="isOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click.native="$emit('toggle')"
    />
    <el-badge
      class="layoutHeader_badge"
      :value="100"
      :max="99"
      :hidden="!true"
      is-dot
    >
      <svg-icon class="layoutHeader_badge_downloadIcon" icon="download" />
    </el-badge>
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

  .layoutHeader_toggleIcon {
    font-size: $FONTSIZE_5;
    position: relative;
    cursor: pointer;
  }

  .layoutHeader_badge {
    :deep(.el-badge__content) {
      top: -2px;
    }

    .layoutHeader_badge_downloadIcon {
      cursor: pointer;
      font-size: $FONTSIZE_3;
      transform: translateY(-2px);
    }
  }
}
</style>
