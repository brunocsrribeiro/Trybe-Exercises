const mysql = require('mysql2/promise');

module.exports = connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "COMERCIO",
  port: 3306,
});
