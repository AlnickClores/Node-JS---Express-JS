const connection = require("../database/connection");

module.exports = async () => {
  try {
    const query = "SELECT * FROM heroes";
    const [rows, fields] = await connection.query(query);
    return rows;
  } catch (error) {
    console.log(error);
    return false;
  }
};
