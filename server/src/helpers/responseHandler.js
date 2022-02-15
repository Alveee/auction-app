const responseHandler = (res, data, message) => {
  return res.status(200).json({
    status: "success",
    data,
    message,
  });
};

module.exports = responseHandler;
