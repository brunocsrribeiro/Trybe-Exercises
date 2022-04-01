const express = require('express');
const bodyParser = require('body-parser');
const root = require('./routers/customerRouter');
const error = require('./middleware/error');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use('/', root);
app.use(error);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
