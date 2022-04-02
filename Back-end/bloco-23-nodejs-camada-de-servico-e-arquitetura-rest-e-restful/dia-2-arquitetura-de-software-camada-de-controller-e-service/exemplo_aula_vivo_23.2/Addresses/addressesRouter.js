const express = require('express');
const addressController = require('./addressesController');


const addressRouter = express.Router();
const rootRouter = express.Router();

addressRouter.post('/', addressController.createNewAddress);

rootRouter.use('/addresses', addressRouter);

module.exports = rootRouter;
