const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
const usersRoutes = require("./routes/users");
const heroesRoutes = require("./routes/heroes");

app.use("/users", usersRoutes);
app.use("/heroes", heroesRoutes);

const port = 3001;

app.listen(port, () => {
  console.log("Listening on port:", port);
});
