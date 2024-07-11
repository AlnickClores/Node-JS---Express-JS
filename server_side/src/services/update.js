const connection = require("../database/connection");

module.exports = async (id, fieldsToUpdate) => {
  try {
    const allowedFields = ["name", "role", "damage_type", "price", "image"];
    const updates = [];
    const values = [];

    allowedFields.forEach((field) => {
      if (fieldsToUpdate[field] !== undefined) {
        updates.push(`${field} = ?`);
        values.push(fieldsToUpdate[field]);
      }
    });

    if (updates.length === 0) {
      throw new Error("No fields to update");
    }

    const query = `
      UPDATE heroes 
      SET ${updates.join(", ")}
      WHERE id = ?;
    `;
    values.push(id);

    const [result] = await connection.query(query, values);
    return result.affectedRows > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
};
