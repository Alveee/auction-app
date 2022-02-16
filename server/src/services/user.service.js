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

module.exports = {
  login,
};
