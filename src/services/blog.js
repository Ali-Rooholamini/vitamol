export function getBlogList(axios) {
  return axios.get(`/blogs`);
}

export function getBlogDetail(axios, id) {
  return axios.get(`/blog/detail/${id}/`);
}

export default {
  getBlogList,
  getBlogDetail,
};
