const { StatusCodes } = require("http-status-codes");
const songService = require('../services/song');

const create = async (req, res, next) => {
  try {
    const { name, album, artist } = req.body;

    const created = songService.create({ name, album, artist });
   
    return res.status(StatusCodes.OK).json(created);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  create,
}
