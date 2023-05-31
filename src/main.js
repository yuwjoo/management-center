import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/js/interceptorAxios";
import "@/assets/js/interceptorRouter";
import "@/librarys/elementUI";
import "@/librarys/echarts";
import "@/assets/css/normal.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
