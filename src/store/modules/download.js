const store = {
  namespaced: true,
  state: {
    uuid: 0, // 唯一id
    downloadList: JSON.parse(localStorage.getItem("downloadList") || "[]"), // 下载列表
  },
  getters: {
    downloadCount: (state) => state.downloadList.length, // 下载文件数量
  },
  mutations: {
    /**
     * @name: 添加下载
     * @param {object} state 状态
     * @param {string} url 文件url
     */
    addDownload(state, url) {
      const downloadData = {
        id: `${Date.now()}${state.uuid++}`, // 唯一id
        url: url, // 下载地址
        name: url, // 文件名
        state: "play", // 状态： play: 开始；stop：暂停；异常：error
        progress: 0, // 进度
        current: 0, // 当前下载量
        total: 0, // 文件总量
        start: () => {}, // 开始下载
        stop: () => {}, // 暂停下载
        destroy: () => {}, // 销毁
      };
      state.downloadList.push(downloadData);
      localStorage.setItem("downloadList", JSON.stringify(state.downloadList));
    },
    /**
     * @name: 删除下载
     * @param {object} state 状态
     * @param {string} id 下载id
     */
    deleteDownLoad(state, id) {
      const pos = state.downloadList.findIndex((item) => item.id === id);
      if (pos !== -1) {
        state.downloadList[pos].destroy();
        state.downloadList.splice(pos, 1);
        localStorage.setItem(
          "downloadList",
          JSON.stringify(state.downloadList)
        );
      }
    },
    /**
     * @name: 清空下载列表
     * @param {object} state 状态
     */
    clearDownload(state) {
      state.downloadList.forEach((item) => item.destroy());
      state.downloadList = [];
      localStorage.setItem("downloadList", JSON.stringify(state.downloadList));
    },
  },
  actions: {},
};

export default store;
