const { Product, User } = require("../models");
const Bidding = require("../models/bidding.model");

const addBid = async (productId, userId, amount) => {
  let status;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      status = 404;
      throw new Error("Product not foud");
    }

    if (new Date(product.closeDate).getTime() < new Date().getTime()) {
      status = 400;
      throw new Error("Product bidding is closed");
    }

    let maxBid;
    await getMaxBid(productId).then((response) => {
      maxBid = response.data;
    });

    if (maxBid?.userId === userId) {
      status = 400;
      throw new Error("You are the highest bidder.");
    }
    if (maxBid?.amount > amount || product.minimumBidAmount > amount) {
      status = 400;
      throw new Error("Bidding amount must be higher than last bid amount");
    }

    let message = "Product bid added successfully";
    await product.updateOne({ lastBidAmount: amount });

    const bid = await Bidding.findOne({ productId, userId });
    if (bid) {
      const response = await bid.updateOne({ amount });
      if (response.modifiedCount) {
        return {
          data: bid,
          message: "Product bid updated successfully",
        };
      }
    }
    const data = Bidding.create({
      productId,
      userId,
      amount,
    });

    return { data, message: message };
  } catch (err) {
    throw Object.assign(new Error("Bad Request"), {
      response: {
        status: status,
        data: {
          error: {
            message: err.message,
          },
        },
      },
    });
  }
};

const getMaxBid = async (productId) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error("Product not foud");
    }

    const res = await Bidding.find({ productId }).sort({ amount: -1 }).limit(1);
    return {
      data: res[0],
      message: "Retrieve max bid successfully",
    };
  } catch (err) {
    throw Object.assign(new Error("Bad Request"), {
      response: {
        status: 404,
        data: {
          error: {
            message: err.message,
          },
        },
      },
    });
  }
};

const activateAutoBidding = async (userId, productId) => {
  let status;
  try {
    const user = await User.findById(userId);
    if (!user) {
      status = 404;
      throw new Error("User not foud");
    }

    const product = await Product.findById(productId);
    if (!product) {
      status = 404;
      throw new Error("Product not foud");
    }

    if (new Date(product.closeDate).getTime() < new Date().getTime()) {
      status = 400;
      throw new Error("Product bidding is closed");
    }

    const bid = await Bidding.findOne({ productId, userId });
    if (!bid) {
      status = 400;
      throw new Error("Place a bid first to activate auto-bidding");
    }
    const result = await bid.updateOne({ isAutoBiddingEnabled: true });
    if (result.modifiedCount) {
      const updatedBid = await Bidding.findById(bid._id);
      return {
        data: updatedBid,
        message: "Auto-bidding has been activated successfully",
      };
    }
    return {
      data: {},
      message: "Failed to activate auto-bidding",
    };
  } catch (err) {
    throw Object.assign(new Error("Bad Request"), {
      response: {
        status: status,
        data: {
          error: {
            message: err.message,
          },
        },
      },
    });
  }
};

const getAutoBiddingStatus = async (userId, productId) => {
  let status;
  try {
    const bid = await Bidding.findOne({ productId, userId });
    if (!bid) {
      status = 400;
      throw new Error("No status found");
    }
    return {
      data: bid,
      message: "Retrieve auto bidding status",
    };
  } catch (err) {
    throw Object.assign(new Error("Bad Request"), {
      response: {
        status: status,
        data: {
          error: {
            message: err.message,
          },
        },
      },
    });
  }
};

const autoBidding = async (userId, productId) => {
  const product = await Product.findById(productId);
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

  if (new Date(product.closeDate).getTime() < new Date().getTime()) {
    throw Object.assign(new Error("Bad Request"), {
      response: {
        status: 400,
        data: {
          error: {
            message: `Product bidding is closed`,
          },
        },
      },
    });
  }

  const bid = await Bidding.findOne({ productId, userId });
  if (bid) {
    const response = await bid.updateOne({ amount: product.minimumBidAmount });
    if (response.modifiedCount) {
      return {
        data: {},
        message: "Product bid updated successfully",
      };
    } else {
      throw Object.assign(new Error("Bad Request"), {
        response: {
          status: 400,
          data: {
            error: {
              message: `Product bid not updated`,
            },
          },
        },
      });
    }
  }
  const data = Bidding.create({
    productId,
    userId,
    amount: product.minimumBidAmount,
  });

  return { data, message: "Product bid added successfully" };
};

module.exports = {
  addBid,
  getMaxBid,
  autoBidding,
  activateAutoBidding,
  getAutoBiddingStatus,
};
