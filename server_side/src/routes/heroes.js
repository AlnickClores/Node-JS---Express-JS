const express = require("express");
const connection = require("../database/connection");
const createHero = require("../services/create");
const viewHero = require("../services/read");
const updateHero = require("../services/update");
const deleteHero = require("../services/delete");

const router = express.Router();

// check database connection
router.get("/test-db", async (req, res) => {
  try {
    const result = await connection.execute("SELECT 1 + 1 AS result");
    console.log("Result:", result);
    const [rows, fields] = result;
    res.send({
      message: "Database connection successful",
      result: rows[0].result,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Database connection failed", error });
  }
});

// create heroes
router.post("/insert", async (req, res) => {
  const { name, role, damage_type, price, image } = req.body;

  const result = await createHero(name, role, damage_type, price, image);
  if (result) {
    res.status(201).send({ message: "Hero created successfully" });
  } else {
    res.status(500).send({ message: "Error creating hero" });
  }
});

// read heroes
router.get("/view", async (req, res) => {
  const heroes = await viewHero();

  if (heroes) {
    res.status(200).send(heroes);
  } else {
    res.status(500).send({ message: "Error retrieving the heroes." });
  }
});

// update heroes
router.put("/update", async (req, res) => {
  const { id, name, role, damage_type, price, image } = req.body;
  const fieldsToUpdate = {};

  if (name) fieldsToUpdate.name = name;
  if (role) fieldsToUpdate.role = role;
  if (damage_type) fieldsToUpdate.damage_type = damage_type;
  if (price) fieldsToUpdate.price = price;
  if (image) fieldsToUpdate.image = image;

  const result = await updateHero(id, fieldsToUpdate);
  if (result) {
    res.status(200).send({ message: "Hero updated successfully" });
  } else {
    res.status(500).send({ message: "Error updating hero" });
  }
});

// delete heroes
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await deleteHero(id);

  if (result) {
    res.status(200).send({ message: "Hero Deleted Successfully" });
  } else {
    res.status(500).send({ message: "Hero Deletion Unsuccessfull" });
  }
});

module.exports = router;
