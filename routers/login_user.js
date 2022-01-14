var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const { User } = require("../database_models/models") ;

router.get("/", function (req, res) {
  res.render("login_user");
});

router.post("/", function (req, res) {
  res.send("About birds");
});


module.exports = router;