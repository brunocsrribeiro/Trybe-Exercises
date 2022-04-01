const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const app = express();
const theSimpsons = require('./fs_simpsons');

app.use(express.json());
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(201).json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req,res) => {
  const { name, age } = req.body;

  if (+age <= 17) return res.status(401).json({ message: 'Unauthorized' });
  
  res.status(200).json({ message: `Hello, ${name}` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await theSimpsons.getSimpsons();

  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async (req,res) => {
  const { id } = req.params;
  const simpsons = await theSimpsons.getSimpsons();

  const simpson = simpsons.find((s) => s.id === parseInt(id));

  if (!simpson) return res.status(404).json({ message: 'Simpson not found!' });

  res.status(200).json(simpson);
}));

app.listen(3001, () => {
  console.log('Online');
});
