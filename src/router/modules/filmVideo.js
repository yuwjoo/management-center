export default {
  path: "filmVideo",
  name: "filmVideo",
  component: () => import(/* webpackChunkName: "filmVideo" */ "@/views/filmVideo"),
  meta: {
    title: "影视",
    keepAlive: true,
  },
  children: [
    {
      path: "filmVideoPlay",
      name: "filmVideoPlay",
      component: () =>
        import(
          /* webpackChunkName: "filmVideoPlay" */ "@/views/filmVideo/childrens/filmVideoPlay"
        ),
      meta: {
        title: "影视详情",
        childPage: true,
      },
    },
  ],
};
