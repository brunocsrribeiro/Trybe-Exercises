const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  console.error(err.message);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
}
