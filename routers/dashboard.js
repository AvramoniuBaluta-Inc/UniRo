var express = require("express");
var router = express.Router();
const isLoggedIn = require("../backend_scripts/isLoggedIn.js");

router.get("/", isLoggedIn, function (req, res) {
  res.render("dashboard");
});

module.exports = router;
