var express = require("express");
var router = express.Router();
//const universitateSchema = require("database_models/universitate.js");
//const mongoose = require("mongoose");

router.get("/", function (req, res) {
  res.render("index");
});

router.post("/", function (req, res) {
  res.send("About birds");
});

module.exports = router;
