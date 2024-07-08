const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "mlbb_heroes",
  password: "knotz2k3",
});

module.exports = connection;
