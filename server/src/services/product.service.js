const { Product } = require("../models");

const queryProducts = async () => {
  return Product.find();
};

const getProductBySlug = async (slug) => {
  return Product.findOne({ slug }).then((product) => {
    if (!product) {
      throw Object.assign(new Error("Bad Request"), {
        response: {
          status: 404,
          data: {
            error: {
              message: `Product not found`,
            },
          },
        },
      });
    }
    return product;
  });
};

module.exports = {
  queryProducts,
  getProductBySlug,
};
