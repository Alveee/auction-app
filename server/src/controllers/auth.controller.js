const { userService } = require("../services");
const errorHandler = require("../helpers/errorHandler");
const responseHandler = require("../helpers/responseHandler");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.login(email, password);
    responseHandler(res, result.data, "User logged in successfully");
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports = {
  login,
};
