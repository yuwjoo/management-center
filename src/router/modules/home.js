export default {
  path: "home",
  name: "home",
  component: () => import(/* webpackChunkName: "home" */ "@/views/home"),
  meta: {
    title: "首页",
    keepAlive: true
  },
};
