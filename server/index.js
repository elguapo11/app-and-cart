require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;


app.get("/", (req, res) => {
  res.json({ message: "homepage" });
  console.log('hitting homepage')
});

app.get("/new", (req, res) => {
  res.json({ message: "second page" });
  console.log('hitting second page')
});


app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`);
    console.log("I'm a successful problem solver")
  });

