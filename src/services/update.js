const connection = require("../database/connection");

module.exports = async (id, name, role, damage_type, price, image) => {
  try {
    const query = `
      UPDATE heroes 
      SET name = ?, role = ?, damage_type = ?, price = ?, image = ?
      WHERE id = ?;
    `;
    const [result] = await connection.query(query, [
      name,
      role,
      damage_type,
      price,
      image,
      id,
    ]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
};
