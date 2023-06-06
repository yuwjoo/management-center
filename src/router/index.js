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
  scrollBehavior(to, _from, _savedPosition) {
    if (window.main) {
      if (to?.meta?.savedPosition) {
        window.main.scroll(to.meta.savedPosition);
        delete to.meta.savedPosition;
      } else {
        window.main.scroll({ top: 0, left: 0 });
      }
    }
  },
});

export default router;
