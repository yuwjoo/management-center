<template>
  <div class="filmVideoPlay">
    <!-- 加载状态 start -->
    <com-loading :show="loading" position="fixed" offset="60px" />
    <!-- 加载状态 end -->

    <!-- 播放器 start -->
    <div class="filmVideoPlay_video">
      <div id="player"></div>
    </div>
    <!-- 播放器 end -->

    <div class="filmVideoPlay_content">
      <el-tabs class="filmVideoPlay_content_tab">
        <el-tab-pane
          v-for="(item, index) in lineRouteList"
          class="filmVideoPlay_content_tab_pane"
          :key="index"
          :label="item.label"
          :name="item.label"
        >
          <div
            v-for="(blockItem, blockIndex) in item.list"
            :key="blockIndex"
            class="filmVideoPlay_content_tab_pane_block"
          >
            {{ blockItem.label }}
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import comLoading from "@/components/Loading";
import { usePlayer } from "@/library/xgplayer";

export default {
  name: "filmVideoPlay",
  beforeRouteEnter(to, from, next) {
    to.meta.title = "海绵宝宝";
    next();
  },
  data() {
    return {
      loading: true, // 加载中
      lineRouteList: [], // 线路列表
    };
  },
  mounted() {
    this.init();
    screen.orientation.lock();
    screen.orientation.addEventListener("change", this.handleOrientationChange);
  },
  beforeDestroy() {
    screen.orientation.removeEventListener(
      "change",
      this.handleOrientationChange
    );
  },
  methods: {
    /**
     * @name: 初始化
     */
    init() {
      setTimeout(() => {
        this.player = usePlayer({
          id: "player",
          url: "http://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
          fluid: true,
          // poster: "https://i.ytimg.com/vi/lK2ZbbQSHww/hqdefault.jpg",
          videoInit: true,
          download: true,
        });
      }, 2000);
      this.lineRouteList = [
        {
          label: "youTube",
          list: [
            { label: "蓝光", url: "www.baidu.com" },
            { label: "标准", url: "www.baidu.com" },
            { label: "高清", url: "www.baidu.com" },
          ],
        },
        {
          label: "优酷",
          list: [
            { label: "标准", url: "www.baidu.com" },
            { label: "高清", url: "www.baidu.com" },
          ],
        },
        {
          label: "土豆",
          list: [
            { label: "标准", url: "www.baidu.com" },
            { label: "超清", url: "www.baidu.com" },
          ],
        },
      ];
    },
    /**
     * @name: 处理屏幕方向改变
     */
    handleOrientationChange({ target }) {
      if (["landscape-primary", "landscape-secondary"].includes(target.type)) {
        this.player.getFullscreen(this.player.root);
      } else {
        this.player.exitFullscreen(this.player.root);
      }
    },
  },
  components: {
    comLoading,
  },
};
</script>

<style lang="scss" scoped>
.filmVideoPlay {
  .filmVideoPlay_video {
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 56.25%;
    background-color: $BASE_BLACK;
    position: relative;

    #player {
      position: absolute;
    }
  }
  .filmVideoPlay_content {
    margin-top: 20px;

    .filmVideoPlay_content_tab {
      .filmVideoPlay_content_tab_pane {
        display: flex;
        align-items: center;

        .filmVideoPlay_content_tab_pane_block {
          padding: 3px 10px;
          margin: 0 6px;
          border: $BORDERWIDTH solid $BORDERCOLOR_2;
          border-radius: $BORDERRADIUS_SMALL;
        }
      }
    }
  }
}
</style>
