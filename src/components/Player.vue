<template>
  <div class="player">
    <div ref="box"></div>
  </div>
</template>

<script>
import Player from "xgplayer";
import xgplayerHls from "xgplayer-hls";
import "xgplayer/dist/index.min.css";

export default {
  props: {
    // 视频地址
    url: {
      type: String,
      required: false,
    },
    // 封面图地址
    poster: {
      type: String,
      required: false,
    },
    // 自定义的配置项
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      player: null, // 播放器实例
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
      const player = new Player({
        el: this.$refs.box,
        url: this.url,
        poster: this.poster,
        fluid: true,
        videoInit: true,
        plugins: [xgplayerHls],
        ...this.options,
      });
      this.player = player;
      this.$emit("player", player);
    },
  },
};
</script>
