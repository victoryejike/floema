const express = require("express");
const app = express();
const port = 3200;
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/detail/:", (req, res) => {
  res.render("pages/detail");
});

app.get("/collections", (req, res) => {
  res.render("pages/collections");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
