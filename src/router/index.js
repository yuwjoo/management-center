/*
 * @Description: 
 * @Author: YH
 * @Date: 2022-11-14 20:41:24
 * @LastEditTime: 2022-11-15 21:04:06
 * @LastEditors: YH
 * @Reference: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import("@/views/layout"),
    redirect: { name: 'home' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
        meta: {
          title: "首页"
        }
      },
      {
        path: 'charts',
        name: 'charts',
        component: () => import(/* webpackChunkName: "charts" */ '@/views/charts'),
        meta: {
          title: "图表"
        }
      }
    ]
  },
  {
    path: '*',
    name: "404",
    component: () => import("@/views/404")
  }
]

const router = new VueRouter({
  routes
})

export default router
