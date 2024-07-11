const connection = require("../database/connection");

module.exports = async (name, role, damage_type, price, image) => {
  try {
    const query =
      "INSERT INTO heroes (name, role, damage_type, price, image) VALUES (?, ?, ?, ?, ?)";

    await connection.execute(query, [name, role, damage_type, price, image]);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
