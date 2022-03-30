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
  (async () => {
  await University.find().then((universitati) => {
  universitati.forEach((universitate) => {
    uniArray[cnt] =universitate;
    cnt++;
  });
});
    res.render("universities", {
      lungime: cnt,
      uniArray: uniArray,
      materii: materii,
      specializari: specializari,
      orase: orase,
    });
  })();

});

router.post("/", function (req, res) {
  var cnt;
  var cntFiltered = 1;
  var uniArray = [];
  var uniArrayFiltered = [];
  (async () => {
    var cnt = 1;
    var uniArray = [];
    await University.find().then((universitati) => {
      universitati.forEach((universitate) => {
        uniArray[cnt] =universitate;
        cnt++;
      });
    });
    for (var i = 1; i < cnt; i++) {
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
        uniArrayFiltered[cntFiltered] = uniArray[i];
        cntFiltered++;
      }
    }
    res.render("universities", {
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
