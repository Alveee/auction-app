const { productService } = require("../services");
const errorHandler = require("../helpers/errorHandler");
const responseHandler = require("../helpers/responseHandler");

const getProducts = async (req, res) => {
  try {
    const data = await productService.queryProducts();
    responseHandler(res, data, "Products retrieved successfully");
  } catch (err) {
    errorHandler(res, err);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await productService.getProductBySlug(req.params.slug);
    responseHandler(res, product, "Product retrieved successfully");
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports = {
  getProducts,
  getProduct,
};
