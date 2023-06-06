/*
 * @Description: router拦截器
 * @Author: YH
 * @Date: 2022-11-14 22:07:33
 * @LastEditTime: 2023-06-06 09:30:46
 * @LastEditors: YH
 * @Reference:
 */
import router from "@/router";

router.beforeEach((to, from, next) => {
  if (to !== from && window.main && from?.meta) {
    from.meta.savedPosition = {
      top: window.main.scrollTop,
      left: window.main.scrollLeft,
    };
  }
  if (to.matched.length === 0) {
    next({ name: "404" });
  } else {
    next();
  }
});

router.afterEach((to, from) => {});
