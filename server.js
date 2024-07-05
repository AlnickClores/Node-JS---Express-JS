const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const usersRoutes = require("./routes/users");

app.use("/users", usersRoutes);

const port = 3000;

app.listen(port, () => {
  console.log("Listening from: ", port);
});
