import request from "@/assets/js/interceptorAjax";

// 模糊搜索电影
export function searchFilmVideo(data) {
  return request({
    url: "/api/video/search",
    method: "post",
    data,
  });
}

// 获取视频详情
export function getDetailInfo(data) {
  return request({
    url: "/api/video/getDetailInfo",
    method: "post",
    data,
  });
}

// 获取视频地址
export function getVideoUrl(data) {
  return request({
    url: "/api/video/getVideoUrl",
    method: "post",
    data,
  });
}
