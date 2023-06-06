export default {
  path: "store",
  name: "store",
  component: () => import(/* webpackChunkName: "store" */ "@/views/store"),
  meta: {
    title: "仓库",
    keepAlive: true
  },
};
