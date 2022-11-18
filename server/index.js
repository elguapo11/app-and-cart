require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;


app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`);
    console.log("I'm a successful problem solver")
  });