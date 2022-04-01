const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'Br131908',
  host: 'localhost',
  database: 'Pixar'
});

module.exports = connection;
