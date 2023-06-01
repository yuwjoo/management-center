/*
 * @Description: router拦截器
 * @Author: YH
 * @Date: 2022-11-14 22:07:33
 * @LastEditTime: 2023-06-01 11:41:48
 * @LastEditors: YH
 * @Reference:
 */
import router from "@/router";

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ name: "404" });
  } else {
    next();
  }
});

router.afterEach((to, from) => {});
