const { biddingService } = require("../services");
const errorHandler = require("../helpers/errorHandler");
const responseHandler = require("../helpers/responseHandler");

const addBid = async (req, res) => {
  try {
    const { productId, userId, amount } = req.body;
    const result = await biddingService.addBid(productId, userId, amount);
    responseHandler(res, result.data, result.message);
  } catch (err) {
    console.log(err);
    errorHandler(res, err);
  }
};

const activateAutoBidding = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const data = await biddingService.activateAutoBidding(userId, productId);
    responseHandler(res, data, "Auto bidding activated successfully");
  } catch (err) {
    console.log(err);
    errorHandler(res, err);
  }
};

const configureAutoBidding = async (req, res) => {
  try {
    const { userId, maxBidAmount, bidAlertPercentage } = req.body;
    const data = await biddingService.configureAutoBidding(
      userId,
      maxBidAmount,
      bidAlertPercentage
    );
    responseHandler(res, data, "Auto bidding configured successfully");
  } catch (err) {
    console.log(err);
    errorHandler(res, err);
  }
};

module.exports = {
  addBid,
  activateAutoBidding,
  configureAutoBidding,
};
