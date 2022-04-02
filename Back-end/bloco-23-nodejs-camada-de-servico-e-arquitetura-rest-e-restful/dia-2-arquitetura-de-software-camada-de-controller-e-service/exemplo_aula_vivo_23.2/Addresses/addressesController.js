const addressModel = require('./addressesModel');
const { StatusCodes } = require("http-status-codes");

const createNewAddress = async (req, res, next) => {
  try {
    const { RUA, BAIRRO, CIDADE, ESTADO, FK_ID_CLIENTE } = req.body;

    const newAddress = await addressModel.createAddress({ RUA, BAIRRO, CIDADE, ESTADO, FK_ID_CLIENTE });

    return res.status(StatusCodes.CREATED).json(newAddress);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createNewAddress,
}