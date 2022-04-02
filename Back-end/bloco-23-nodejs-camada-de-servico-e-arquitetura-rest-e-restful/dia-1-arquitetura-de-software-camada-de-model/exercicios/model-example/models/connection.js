const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'pass',
  host: 'localhost',
  database: 'Pixar'
});

module.exports = connection;
