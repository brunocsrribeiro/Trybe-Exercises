const customerModel = require('../model/customers');
const { StatusCodes } = require('http-status-codes');

const list = async (_req, res, next) => {
  try {
    const customers = await customerModel.getAll();

    res.status(StatusCodes.OK).json(customers);
  } catch (error) {
    next(error);
  }
  
}

const listId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customerId = await customerModel.getById(+id);

    if (!customerId.length) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Customer not found!' });
    }

    return res.status(StatusCodes.OK).json(customerId[0]);
  } catch (error) {
    next(error);
  }
}

const createNewCustomer = async (req, res, next) => {
  try {
    const { NOME, SEXO, EMAIL, CPF } = req.body;

    const newCustomer = await customerModel.createCustomer({ NOME, SEXO, EMAIL, CPF });

    return res.status(StatusCodes.CREATED).json(newCustomer);
  } catch (error) {
    next(error);
  }
}

const deleteCustomers = async (req, res, next) => {
  try {
    const { id } = req.params;

    const customerId = await customerModel.getById(+id);
    if (!customerId.length) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Customer not found!' });
    }

    await customerModel.deleteCustomer(id);

    return res.status(StatusCodes.NO_CONTENT).json({ message: 'Customer successfully deleted' });
  } catch (error) {
    next(error);
  }
}

const updated = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { NOME, SEXO, EMAIL, CPF } = req.body;

    const customerId = await customerModel.getById(+id);
    if (!customerId.length) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Customer not found!' });
    }

    await customerModel.updateCustomerData({
      ID_CLIENTE: id,
      NOME,
      SEXO,
      EMAIL,
      CPF,
    });

    return res.status(StatusCodes.OK).json({ message: 'Customer data, successfully updated!' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  listId,
  createNewCustomer,
  deleteCustomers,
  updated,
}