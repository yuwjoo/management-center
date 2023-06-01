/*
 * @Description:
 * @Author: YH
 * @Date: 2022-11-14 20:41:24
 * @LastEditTime: 2023-06-01 11:43:44
 * @LastEditors: YH
 * @Reference:
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/views/layout"),
    redirect: { name: "home" },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "@/views/home"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "video",
        name: "video",
        component: () => import(/* webpackChunkName: "video" */ "@/views/video"),
        meta: {
          title: "视频",
        },
      },
      {
        path: "store",
        name: "store",
        component: () => import(/* webpackChunkName: "store" */ "@/views/store"),
        meta: {
          title: "仓库",
        },
      },
    ],
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/404"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
