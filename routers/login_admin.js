var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const { Admin } = require("../database_models/models") ;

router.get("/", function (req, res) {
  res.render("login_admin");
});

router.post("/", function (req, res) {
  res.send("About birds");
});


module.exports = router;