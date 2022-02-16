const { User } = require("../models");

const login = async (email, password) => {
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      throw new Error("User not foud");
    }
    const data = {
      accessToken: `token${user._id}`,
      user: {
        userId: user._id,
        name: user.name,
        email: user.email,
        maxBidAmount: user.maxBidAmount,
        bidAlertPercentage: user.bidAlertPercentage,
      },
    };
    return { data, message: "User logged in successfully!" };
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

const updateSettings = async ({ userId, maxBidAmount, bidAlertPercentage }) => {
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
    data: {
      user: {
        maxBidAmount,
        bidAlertPercentage,
      },
    },
  };
};

module.exports = {
  login,
  updateSettings,
};
