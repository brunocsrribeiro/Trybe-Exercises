const mysql = require('mysql2/promise');

module.exports = connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "COMERCIO",
  port: 3306,
});
