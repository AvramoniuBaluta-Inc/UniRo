var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const { Stat } = require("../database_models/models");

router.post("/", function (req, res) {
  Stat.findOne({ _id: 1 }, function (err, doc) {
    doc.messages = doc.messages + 1;
    doc.save();
  });
});

module.exports = router;
