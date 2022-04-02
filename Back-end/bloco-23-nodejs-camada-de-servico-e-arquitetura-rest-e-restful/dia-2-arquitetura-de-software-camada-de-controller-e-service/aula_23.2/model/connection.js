const mysql = require('mysql2/promise');

module.exports =  connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'pass',
  database: 'music',
});

