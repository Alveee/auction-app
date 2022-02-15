const express = require("express");
const { productController } = require("../controllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.route("/products").get(productController.getProducts);
router.route("/products/:slug").get(productController.getProduct);

module.exports = router;
