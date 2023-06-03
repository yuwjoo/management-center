<template>
  <div class="downloadList">
    <download-list-item
      v-for="(item, index) in list"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import downloadListItem from "./components/downloadListItem.vue";

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.list = [
        { name: "QQ9.7.8.29042.exe", url: "https://mksoftcdnhp.mydown.com/647ad479/63d1cb6659b6c9c42f198bed1df7ae3a/uploadsoft/QQ9.7.8.29042.exe", progress: 36 },
        { name: "QQ9.7.8.29042.exe", url: "https://mksoftcdnhp.mydown.com/647ad479/63d1cb6659b6c9c42f198bed1df7ae3a/uploadsoft/QQ9.7.8.29042.exe", progress: 36 },
        { name: "QQ9.7.8.29042.exe", url: "https://mksoftcdnhp.mydown.com/647ad479/63d1cb6659b6c9c42f198bed1df7ae3a/uploadsoft/QQ9.7.8.29042.exe", progress: 36 },
    ]
  },
  components: {
    downloadListItem,
  },
};
</script>
