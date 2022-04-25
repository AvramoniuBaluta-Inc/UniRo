var express = require("express");
var router = express.Router();
var no = require;

const { University } = require("../database_models/models.js");
var uniFunctions = require("../backend_scripts/uniFunctions.js");
var facultati = require("../public/scripts/facultati");
var specializari = require("../public/scripts/specializari");
var add = require("../public/scripts/addToArray.js");
var orase = require("../public/scripts/orase");

router.get("/", function (req, res) {
  var cnt = 1;
  var uniArray = [];
  var uniArrayId = [];
  (async () => {
    uniArray = await University.find({},{_id:1}).sort({viewsNo:-1});
    var lungime = uniArray.length;
    var dummyUni = await University.findOne({_id:uniArray[0]._id});
    for (var i = 0; i < lungime; i++) {
      uniArrayId[i] = uniArray[i]._id;
    }
    res.render("universities", {
      lungime: lungime,
      uniArray: uniArrayId,
      dummyUni: dummyUni,
      facultati: facultati,
      specializari: specializari,
      orase: orase,
    });
  })();
});

router.post("/", function (req, res) {
  var cnt;
  var cntFiltered = 0;
  var uniArray = [];
  var uniArrayFiltered = [];
  (async () => {
    uniArray = await University.find();
    var cnt = uniArray.length;
    for (var i = 0; i < cnt; i++) {
      if (
        uniFunctions.oras(uniArray[i], req.body.oras) &&
        uniFunctions.facultati(uniArray[i], add.addArray(req.body.materii)) &&
        uniFunctions.rating(uniArray[i], req.body.rating) &&
        uniFunctions.specializare(
          uniArray[i],
          add.addArray(req.body.specializari)
        ) &&
        uniFunctions.distanta(
          uniArray[i],
          req.body.distanta,
          req.body.latitude,
          req.body.longitude
        )
      ) {
        uniArrayFiltered[cntFiltered] = uniArray[i]._id;
        cntFiltered++;
      }
    }
    var dummyUni = await University.findById(uniArrayFiltered[0]);
    res.render("universities", {
      dummyUni: dummyUni,
      lungime: cntFiltered,
      uniArray: uniArrayFiltered,
      facultati: facultati,
      specializari: specializari,
      orase: orase,
    });
  })();
});

module.exports = {
  router: router,
};
