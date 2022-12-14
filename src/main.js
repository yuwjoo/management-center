/*
 * @Description: 入口文件
 * @Author: YH
 * @Date: 2022-11-14 20:41:24
 * @LastEditTime: 2022-11-15 19:50:27
 * @LastEditors: YH
 * @Reference: 
 */
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
