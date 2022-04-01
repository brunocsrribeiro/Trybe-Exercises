const express = require('express');
const app = express();
const port = 3000;

const movies = require('./models/pixar');

app.get('/movie', async (_req, res) => {
  const movie = await movies.getAll();

  res.status(200).json(movie);
});

app.listen(port, () => {
  console.log('Online');
});