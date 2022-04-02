const express = require('express');
const customerController = require('./customersController');


const customerRouter = express.Router();
const rootRouter = express.Router();

customerRouter.get('/', customerController.list);
customerRouter.get('/:id', customerController.listId);
customerRouter.post('/', customerController.createNewCustomer);
customerRouter.delete('/:id', customerController.deleteCustomers);
customerRouter.put('/:id', customerController.updated);

rootRouter.use('/customers', customerRouter);

module.exports = rootRouter;
