const express = require("express");
const router = express.Router();

router.get("/fetch", (request, response) => {
  response.send("List of Users.");
});

module.exports = router;
