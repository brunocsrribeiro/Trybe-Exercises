const express = require('express');
const songController = require('../controllers/songs');

const songRouter = express.Router();

songRouter.post('/', songController.create);

module.exports = {
  songRouter,
};
