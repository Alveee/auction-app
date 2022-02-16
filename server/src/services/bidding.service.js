const { Product, User } = require("../models");
const Bidding = require("../models/bidding.model");

const addBid = async (productId, userId, amount) => {
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
  if (bid?.amount > amount || product.minimumBidAmount > amount) {
    throw Object.assign(new Error("Bad Request"), {
      response: {
        status: 400,
        data: {
          error: {
            message: `Product bidding amount can't be lower than previous bid amount`,
          },
        },
      },
    });
  }
  if (bid) {
    const response = await bid.updateOne({ amount });
    if (response.modifiedCount) {
      return {
        data: {},
        message: "Product bid updated successfully",
      };
    }
  }
  const data = Bidding.create({
    productId,
    userId,
    amount,
  });

  return { data, message: "Product bid added successfully" };
};

const activateAutoBidding = async (userId, productId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw Object.assign(new Error("Bad Request"), {
      response: {
        status: 404,
        data: {
          error: {
            message: `User not found`,
          },
        },
      },
    });
  }

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

const configureAutoBidding = async (
  userId,
  maxBidAmount,
  bidAlertPercentage
) => {
  const user = await User.findById(userId);
  if (!user) {
    throw Object.assign(new Error("Bad Request"), {
      response: {
        status: 404,
        data: {
          error: {
            message: `User not found`,
          },
        },
      },
    });
  }

  const response = await user.updateOne({
    maxBidAmount,
    bidAlertPercentage,
  });

  if (!response.modifiedCount) {
    throw Object.assign(new Error("Bad Request"), {
      response: {
        status: 400,
        data: {
          error: {
            message: `User auto-bidding settings not updated`,
          },
        },
      },
    });
  }

  return {
    data: {},
  };
};

module.exports = {
  addBid,
  autoBidding,
  activateAutoBidding,
  configureAutoBidding,
};
