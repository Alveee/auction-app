const errorHandler = (res, err) => {
  const { response = null } = err;
  switch (response?.status) {
    case 400:
      return res.status(400).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Bad Request",
        },
      });
    case 401:
      return res.status(401).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Unauthorized",
        },
      });
    case 403:
      return res.status(403).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Access Forbidden",
        },
      });
    case 404:
      return res.status(404).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Not Found",
        },
      });
    case 405:
      return res.status(405).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Method not allowed",
        },
      });
    case 410:
      return res.status(410).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Gone",
        },
      });
    case 422:
      return res.status(422).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Unprocessable Entity",
        },
      });
    case 429:
      return res.status(429).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Too Many Requests",
        },
      });
    case 502:
      return res.status(502).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Bad Gateway",
        },
      });
    case 503:
      return res.status(503).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Service Unavailable",
        },
      });
    case 504:
      return res.status(504).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Gateway Timeout",
        },
      });
    default:
      return res.status(500).json({
        status: "failed",
        data: null,
        error: {
          message: response?.data?.error?.message || "Internal server error",
        },
      });
  }
};

module.exports = errorHandler;
