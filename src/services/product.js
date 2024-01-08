export function getSubCategories(axios, cat_id) {
  return axios.get(`/product/subcategory/${cat_id}/`);
}

export function getProductList(axios, SUB_CAT_ID) {
  return axios.get(`/product/product-list/${SUB_CAT_ID}/`);
}

export default {
  getSubCategories,
  getProductList,
};
