import Vue from "vue";
import Vuex from "vuex";
import download from "./modules/download";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    download,
  },
});
