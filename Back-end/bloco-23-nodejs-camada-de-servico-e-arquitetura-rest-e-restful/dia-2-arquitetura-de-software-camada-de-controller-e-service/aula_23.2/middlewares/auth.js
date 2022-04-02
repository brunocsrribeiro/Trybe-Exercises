const { StatusCodes } = require("http-status-codes");

const SECRET = 'segredo';

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || authorization !== SECRET) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Wrong token or token not informed' });
    }

    next();
  } catch (error) {
    next(error);
  }
}