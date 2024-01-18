export function getBlogList(axios) {
  return axios.get(`/blog/list/`);
}

export function getBlogDetsil(axios, id) {
  return axios.get(`/blog/detail/${id}/`);
}

export default {
  getBlogList,
  getBlogDetsil,
};
