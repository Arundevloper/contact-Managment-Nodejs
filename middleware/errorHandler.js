const { constants } = require("../constant");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.UNAUTHORIZED:
      res.json({
        title: "Unautohrized",
        message: err.message,
        stackTrace: err.Stack,
      });

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.Stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.Stack,
      });
      defalut: console.log("No Error,All are good");
      break;
  }
};

module.exports = errorHandler;
