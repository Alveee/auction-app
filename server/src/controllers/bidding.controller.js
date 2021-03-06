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

const getMaxBid = async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await biddingService.getMaxBid(productId);
    responseHandler(res, result.data, result.message);
  } catch (err) {
    errorHandler(res, err);
  }
};

const getAutoBiddingStatus = async (req, res) => {
  try {
    const { userId, productId } = req.query;
    const result = await biddingService.getAutoBiddingStatus(userId, productId);
    responseHandler(res, result.data, result.message);
  } catch (err) {
    console.log(err);
    errorHandler(res, err);
  }
};

const activateAutoBidding = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const result = await biddingService.activateAutoBidding(userId, productId);
    responseHandler(res, result.data, result.message);
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
  getMaxBid,
  activateAutoBidding,
  getAutoBiddingStatus,
  configureAutoBidding,
};
