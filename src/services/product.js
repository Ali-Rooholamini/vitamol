export function getSubCategories(axios, cat_id) {
  return axios.get(`/product/subcategory/${cat_id}/`);
}

export function getProductList(axios, SUB_CAT_ID) {
  return axios.get(`/product/list/${SUB_CAT_ID}/`);
}

export function getProductDetails(axios, product_id) {
  return axios.get(`/product/detail/${product_id}/`);
}

export default {
  getSubCategories,
  getProductList,
  getProductDetails,
};
