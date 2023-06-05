export default {
  path: "download",
  name: "download",
  component: () =>
    import(/* webpackChunkName: "download" */ "@/views/download"),
  meta: {
    title: "下载",
  },
  children: [
    {
      path: "downloadChildPage",
      name: "downloadChildPage",
      component: () =>
        import(/* webpackChunkName: "downloadChildPage" */ "@/views/download"),
      meta: {
        title: "下载",
        childPage: true,
      },
    },
  ],
};
