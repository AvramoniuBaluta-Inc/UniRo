var express = require("express");
var router = express.Router();
var orase = require("../public/scripts/orase");
var materii = require("../public/scripts/materii.js");
var specializari = require("../public/scripts/specializari.js");

router.get("/", function (req, res) {
  res.render("contact", {
    specializari: specializari,
    materii: materii,
    orase: orase,
  });
});

module.exports = router;
