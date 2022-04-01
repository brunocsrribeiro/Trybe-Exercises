const mysql = require('mysql2/promise');

module.exports = connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Br131908',
  database: 'model_example'
});
