const connection = require("../database/connection");

module.exports = async (id) => {
  try {
    const query = `DELETE FROM heroes WHERE id = ?`;
    const [result] = await connection.query(query, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
};
