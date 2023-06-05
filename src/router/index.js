/*
 * @Description:
 * @Author: YH
 * @Date: 2022-11-14 20:41:24
 * @LastEditTime: 2023-06-05 17:39:52
 * @LastEditors: YH
 * @Reference:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import modules from "./modules";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/views/layout"),
    redirect: { name: "home" },
    children: modules,
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
