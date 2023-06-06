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
      <el-tabs v-model="activeLineRoute" class="filmVideoPlay_content_tab">
        <el-tab-pane
          v-for="(item, index) in lineRouteList"
          class="filmVideoPlay_content_tab_pane"
          :key="index"
          :label="item.lineName"
          :name="item.lineName"
        >
          <div
            v-for="(blockItem, blockIndex) in item.playList"
            :key="blockIndex"
            :class="[
              'filmVideoPlay_content_tab_pane_block',
              {
                'is-active': activePlayBlock === blockItem.url,
              },
            ]"
            @click="handleClickPlayBlock(blockItem)"
          >
            {{ blockItem.title }}
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import comLoading from "@/components/Loading";
import { usePlayer } from "@/library/xgplayer";
import { getDetailInfo, getVideoUrl } from "@/api/filmVideo";

export default {
  name: "filmVideoPlay",
  beforeRouteEnter(to, from, next) {
    to.meta.title = to.query.title;
    next();
  },
  data() {
    return {
      loading: false, // 加载中
      lineRouteList: [], // 线路列表
      data: {}, // 详情数据
      activeLineRoute: "", // 当前选中的线路
      activePlayBlock: "", // 当前播放地址
      videoUrl: "", // 视频真实地址
    };
  },
  mounted() {
    this.getData();
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
      this.player = usePlayer({
        id: "player",
        url:
          this.videoUrl ||
          "https://vip.ffzy-play7.com/20230115/11530_93d1a732/index.m3u8",
        fluid: true,
        videoInit: true,
      });
    },
    /**
     * @name: 获取数据
     */
    async getData() {
      this.loading = true;
      try {
        const data = await getDetailInfo({
          detailUrl: this.$route.query.detailUrl,
        });
        this.data = data;
        this.lineRouteList = data.playLineList;
        this.activeLineRoute = data.playLineList[0].lineName;
        this.activePlayBlock = data.playLineList[0].playList[0].url;
        await this.getVideoUrl();
        this.init();
      } catch (err) {}
      this.loading = false;
    },
    /**
     * @name: 获取真实视频地址
     */
    async getVideoUrl() {
      const { url } = await getVideoUrl({ playUrl: this.activePlayBlock });
      this.videoUrl = url;
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
    /**
     * @name: 处理点击播放线路块
     * @param {object} item 播放线路信息
     */
    handleClickPlayBlock(item) {
      this.activePlayBlock = item.url;
      this.loading = true;
      this.getVideoUrl()
        .then(() => {
          this.player.src = this.videoUrl;
        })
        .finally(() => {
          this.loading = false;
        });
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

          &.is-active {
            background-color: $BACKGROUNDCOLOR_ACTIVE;
          }
        }
      }
    }
  }
}
</style>
