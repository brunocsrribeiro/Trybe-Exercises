const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const recipes = [
  {id: 1, name: 'Lasanha', price: 40.0, waitTime: 30},
  {id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25},
  {id: 3, name: 'Macarrão ao molho branco', price: 35.0, waitTime: 25},
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 }
];

app.get('/recipes', (_req, res) => {
  res.json(recipes.sort((x, y) => {
    let a = x.name.toUpperCase(),
        b =y.name.toUpperCase();
    return a ==  b  
      ? false
      : a > b
        ? true
        : -1;
  }));
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });
  
  res.status(200).json(recipe);
});

app.get('/recipes/search', (req, res) => {
  const { name, minPrice, maxPrice } = req.query;
  const filteredRecipes = recipes
    .filter((r) => (
        r.name.includes(name) &&
        (r.price < parseInt(maxPrice) || r.price > parseInt(minPrice))
    ));

  res.status(200).json(filteredRecipes);
});

app.post('/recipes', (req, res) => {
  const { id, name, price, waitTime } = req.body;

  recipes.push({ id, name, price, waitTime });

  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.get('/drinks', (_req, res) => {
  res.json(drinks.sort((x, y) => {
    let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
    return a ==  b  
      ? false
      : a > b
        ? true
        : -1;
  }));
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks
    .filter((d) => d.name.includes(name));

  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drink);
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;

  drinks.push({ id, name, price });

  res.status(201).json({ message: 'Drink created successfully!' });
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' }) ;

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };
  
  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.get('/validatetoken', (req, res) => {
  const token = req.headers.authorization;

  if (token.length !== 16) return res.status(401).json({ message: 'Invalid Token!' });

  res.status(200).json({ message: 'Valid Token!' });
})

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001');
});

// fetch(`http://localhost:3001/recipes/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     name: 'Macarrão com Frango',
//     price: 30.0
//   })
// });
