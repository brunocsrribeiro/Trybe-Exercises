const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers/songsRouters');
const error = require('./middlewares/error');
const auth = require('./middlewares/auth');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use('/songs', auth, routers.songRouter);
app.use(error);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
