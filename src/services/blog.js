export function getBlogList(axios) {
  return axios.get(`/blog/list/`);
}

export function getBlogDetail(axios, id) {
  return axios.get(`/blog/detail/${id}/`);
}

export default {
  getBlogList,
  getBlogDetail,
};
