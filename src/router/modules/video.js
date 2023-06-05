export default {
  path: "video",
  name: "video",
  component: () => import(/* webpackChunkName: "video" */ "@/views/video"),
  meta: {
    title: "影视",
  },
  children: [
    {
      path: "videoPlay",
      name: "videoPlay",
      component: () =>
        import(
          /* webpackChunkName: "videoPlay" */ "@/views/video/childrens/videoPlay"
        ),
      meta: {
        title: "影视详情",
      },
    },
  ],
};
