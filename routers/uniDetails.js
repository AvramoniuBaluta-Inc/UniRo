var express = require("express");
var router = express.Router();

const { University } = require("../database_models/models.js");

router.get("/:uni", function (req, res) {
  const uniName = req.params.uni;

  University.findOne({ nume: uniName }, function (err, uni) {
    res.render("uniDetails", {
      nume: uni.nume,
      description: uni.descriere,
      link: uni.link,
      lat: uni.latitudine,
      long: uni.longitudine,
      img: uni.img,
      email: uni.email,
      materii: uni.materii,
      specializari: uni.specializari,
    });
  });
});

module.exports = router;
