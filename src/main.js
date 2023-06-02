import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/normal.css"; // 基础css样式
import "@/assets/css/class.scss"; // class样式
import "@/assets/js/interceptorAjax"; // 请求拦截器
import "@/assets/js/interceptorRouter"; // 路由拦截器
import "@/library/elementUI"; // element-ui
import "@/library/svgIcon"; // svg图标组件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
