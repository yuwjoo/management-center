<!--
 * @FileName: Iconfont
 * @FilePath: \management-center\src\components\SvgIcon.vue
 * @Author: FYR
 * @Date: 2022-05-25 11:25:48
 * @LastEditors: YH
 * @LastEditTime: 2023-06-02 17:27:33
 * @Description: 图标组件
-->

<template>
    <svg
        v-if="!/(^(van\-))|(^(http|https):\/\/)/i.test(icon)"
        :class="currentClass"
        aria-hidden="true"
        :style="currentIconStyle"
    >
        <use :xlink:href="currentIcon" />
    </svg>

</template>

<script>

export default {
    name: 'svgIcon',
    props: {
        // 图标
        icon: {
            type: String,
            required: true
        },
        // class
        className: {
            type: String
        },
        // 大小
        size: {
            type: String
        },
        // 颜色
        color: {
            type: String
        }
    },
    computed: {
        // 图标
        currentIcon() {
            let icon = '';

            if (/^(van-)/i.test(this.icon)) {
                icon = this.icon.replace(/^van-/i, '');
            } else if (/^(http|https):\/\//i.test(icon)) {
                icon = this.icon;
            } else {
                icon = '#icon-' + this.icon;
            }

            return icon;
        },
        // 自定义 className
        currentClass() {
            if (this.className) {
                return 'iconfont ' + this.className;
            } else {
                return 'iconfont';
            }
        },
        // 图标样式
        currentIconStyle() {
            return {
                fontSize: this.size,
                color: this.color
            };
        }
    },
    components: {
    }
};
</script>

<style scoped>
.iconfont {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
