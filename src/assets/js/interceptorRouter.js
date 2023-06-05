/*
 * @Description: router拦截器
 * @Author: YH
 * @Date: 2022-11-14 22:07:33
 * @LastEditTime: 2023-06-05 17:59:54
 * @LastEditors: YH
 * @Reference:
 */
import router from "@/router";

let mainEl = null; // main元素

router.beforeEach((to, from, next) => {
  mainEl = mainEl || document.getElementById("main");
  if (mainEl) {
    if (to?.meta?.savedPosition) {
      mainEl.scroll(to.meta.savedPosition);
      delete to.meta.savedPosition;
    } else {
      mainEl.scroll({ top: 0, left: 0 });
    }
    if (to !== from && from?.meta) {
      from.meta.savedPosition = {
        top: mainEl.scrollTop,
        left: mainEl.scrollLeft,
      };
    }
  }
  if (to.matched.length === 0) {
    next({ name: "404" });
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  if (mainEl) {
    if (to?.meta?.savedPosition) {
      mainEl.scroll(to.meta.savedPosition);
      delete to.meta.savedPosition;
    } else {
      mainEl.scroll({ top: 0, left: 0 });
    }
  }
});
