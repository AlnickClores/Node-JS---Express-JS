const express = require("express");
const router = express.Router();

const data = [
  { name: "alnick", age: 21 },
  { name: "steph", age: 23 },
  { name: "kyrie", age: 22 },
  { name: "lebron", age: 25 },
  { name: "dirk", age: 26 },
];

const usersData = JSON.stringify(data);

const callbackGet = (request, response) => {
  response.send(usersData);
};

const callbackPost = (request, response) => {
  response.send("SEEEEEND TEEEEEST!");
};

const callbackGetQuery = (request, response) => {
  const res = request.query;
  console.log(res);
  response.send(res);
};

const callbackPostQuery = (request, response) => {
  const res = request.body;
  console.log(res);
  response.send(res);
};

const callbackGetComp = (request, response) => {
  const { name, age, gender } = request.query;

  if (Number(age) < 18) {
    response.status(500).send({
      message: name + ", sorry. You are not allowed to access the site.",
      status: "Failed",
    });
  } else {
    response.status(200).send(request.query);
    response.send("dsadsa");
  }
};

router.get("/fetch", callbackGet);
router.get("/fetchQuery", callbackGetQuery);
router.post("/insert", callbackPost);
router.post("/insertQuery", callbackPostQuery);
router.get("/insertQueryComp", callbackGetComp);

module.exports = router;
