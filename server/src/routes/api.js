const express = require("express");
const { productController, biddingController } = require("../controllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.route("/products").get(productController.getProducts);
router.route("/products/:slug").get(productController.getProduct);
router.route("/products/:slug/bids").post(biddingController.addBid);
router
  .route("/products/:slug/activate/auto-bidding")
  .post(biddingController.activateAutoBidding);
router
  .route("/users/auto-bidding/configure")
  .put(biddingController.configureAutoBidding);

module.exports = router;
