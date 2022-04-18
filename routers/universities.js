var express = require("express");
var router = express.Router();
var no = require;

const { University } = require("../database_models/models.js");
var uniFunctions = require("../backend_scripts/uniFunctions.js");
var materii = require("../public/scripts/materii");
var specializari = require("../public/scripts/specializari");
var add = require("../public/scripts/addToArray.js");
var orase = require("../public/scripts/orase");

router.get("/", function (req, res) {
  var cnt = 1;
  var uniArray = [];
  var uniArrayId = [];
  (async () => {
    uniArray = await University.find();
    var lungime = uniArray.length;
    for (var i = 0; i < lungime; i++) {
      uniArrayId[i] = uniArray[i]._id;
    }
    //console.log(uniArray[0].img.data);
    res.render("universities", {
      lungime: lungime,
      uniArray: uniArrayId,
      dummyUni: uniArray[0],
      materii: materii,
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
        uniFunctions.materii(uniArray[i], add.addArray(req.body.materii)) &&
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
      materii: materii,
      specializari: specializari,
      orase: orase,
    });
  })();
});

module.exports = {
  router: router,
};
