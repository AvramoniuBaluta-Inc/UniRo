var express = require("express");
var router = express.Router();
var no = require;

const { University } = require("../database_models/models.js");
var uniFunctions = require("../backend_scripts/uniFunctions.js");
var materii = require("../public/scripts/materii");

router.get("/", function (req, res) {
  var cnt;
  var uniArray = [];
  (async () => {
    cnt = await uniFunctions.number_of_elements();
    for (var i = 1; i < cnt; i++) {
      uniArray[i] = await University.findById(i).exec();
    }
    res.render("universities", {
      lungime: cnt,
      uniArray: uniArray,
      materii: materii,
    });
  })();
});

router.post("/", function (req, res) {
  res.send("About birds");
});

module.exports = router;
