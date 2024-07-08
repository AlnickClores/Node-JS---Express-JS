const express = require("express");
const connection = require("../database/connection");
const createHero = require("../services/create");
const viewHero = require("../services/read");

const router = express.Router();

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

router.post("/insert", async (req, res) => {
  const { name, role, damage_type, price, image } = req.body;

  const result = await createHero(name, role, damage_type, price, image);
  if (result) {
    res.status(201).send({ message: "Hero created successfully" });
  } else {
    res.status(500).send({ message: "Error creating hero" });
  }
});

router.get("/view", async (req, res) => {
  const heroes = await viewHero();

  if (heroes) {
    res.status(200).send(heroes);
  } else {
    res.status(500).send({ message: "Error retrieving the heroes." });
  }
});

module.exports = router;
