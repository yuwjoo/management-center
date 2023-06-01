<template>
  <el-header class="layoutHeader hidden-md-and-up">
    <i
      :class="[
        'layoutHeader_toggleIcon',
        isOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold',
      ]"
      @click="$emit('toggle')"
    ></i>
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

  .layoutHeader_toggleIcon {
    font-size: $FONTSIZE_5;
    position: relative;
    cursor: pointer;
  }
}
</style>
