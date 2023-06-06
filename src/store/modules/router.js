const store = {
  namespaced: true,
  state: {
    routes: [], // 处理过的路由列表
  },
  getters: {
    keepAliveWhiteList: (state) =>
      state.routes
        .filter((route) => route?.meta?.keepAlive)
        .map((route) => route.name), // 页面缓存白名单
  },
  mutations: {
    /**
     * @name: 设置路由列表
     * @param {object} state 状态
     * @param {object[]} routes 路由列表
     */
    setRoutes(state, routes) {
      state.routes = routes;
    },
  },
  actions: {},
};

export default store;
