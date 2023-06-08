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
  watch: {
    url(val, oldVal) {
      console.log("url改变", val, this.getSuffix(val));
      if (this.player?.config?.url === val) {
        return;
      }
      if (this.player && this.getSuffix(val) === this.getSuffix(oldVal)) {
        this.player.src = val;
        this.player.replay();
      } else {
        this.init();
      }
    },
    poster(val) {
      if (this.player) {
        this.player.poster = val;
      }
    },
    options() {
      this.init();
    },
  },
  mounted() {
    // this.init();
  },
  methods: {
    /**
     * @name: 初始化
     */
    init() {
      console.log(this.player)
      if (this.player) this.player.destroy();
      const suffix = this.getSuffix(this.url);
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
    /**
     * @name: 获取url后缀名
     * @param {string} url 视频地址
     * @return {string} 后缀名
     */
    getSuffix(url = "") {
      return (url.match(/(?<=\.)[^\.]*$/) || [""])[0].split("?")[0].toLocaleLowerCase();
    },
  },
};
</script>
