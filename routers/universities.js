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
  var cnt;
  var cntFiltered = 1;
  var uniArray = [];
  var uniArrayFiltered = [];
  (async () => {
    cnt = await uniFunctions.number_of_elements();
    for (var i = 1; i < cnt; i++) {
      uniArray[i] = await University.findById(i).exec();
    }
    for (var i = 1; i < cnt; i++) {
      if (
        uniFunctions.oras(uniArray[i], req.body.oras) &&
        uniFunctions.materii(uniArray[i], req.body.materii) &&
        uniFunctions.rating(uniArray[i], req.body.rating) &&
        uniFunctions.specializare(uniArray[i], req.body.specializare) &&
        uniFunctions.distanta(uniArray[i], req.body.distanta)
      ) {
        uniArrayFiltered[cntFiltered] = uniArray[i];
        cntFiltered++;
      }
    }
    res.render("universities", {
      lungime: cntFiltered,
      uniArray: uniArrayFiltered,
      materii: materii,
    });
  })();
});

module.exports = router;
