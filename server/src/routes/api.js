const express = require("express");
const {
  productController,
  biddingController,
  authController,
  userController,
} = require("../controllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.route("/login").post(authController.login);

router.route("/products").get(productController.getProducts);
router.route("/products/:slug").get(productController.getProduct);
router.route("/products/:slug/bids").post(biddingController.addBid);
router.route("/products/:productId/bids/max").get(biddingController.getMaxBid);
router
  .route("/products/activate/auto-bidding")
  .get(biddingController.getAutoBiddingStatus);
router
  .route("/products/activate/auto-bidding")
  .post(biddingController.activateAutoBidding);
router.route("/users/profile/settings").put(userController.updateSettings);

module.exports = router;
