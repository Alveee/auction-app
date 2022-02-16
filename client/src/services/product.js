import http from "./http";

const ProductService = {
  getAll(page = 0) {
    return http.get(`/products?page=${page}`);
  },

  getProductBySlug(slug) {
    return http.get(`/products/${slug}`);
  },
};

export default ProductService;
