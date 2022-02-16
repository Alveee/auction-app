const { userService } = require("../services");
const errorHandler = require("../helpers/errorHandler");
const responseHandler = require("../helpers/responseHandler");

const updateSettings = async (req, res) => {
  try {
    const result = await userService.updateSettings(req.body);
    responseHandler(res, result.data, "User settings updated successfully");
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports = {
  updateSettings,
};
