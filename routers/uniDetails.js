var express = require("express");
var router = express.Router();
var transformations = require("../backend_scripts/transformations.js");

const { University } = require("../database_models/models.js");

router.get("/:uni", function (req, res) {
  var uniName =  transformations.toName(req.params.uni);
  var uniId = transformations.toId(req.params.uni);
  University.findOne({ _id: uniId }, function (err, uni) {
    (async()=>{
    var updateDocument  = {
      $set: {
        viewsNo: uni.viewsNo+1,
      }
    };
    const result = await University.updateOne(uni, updateDocument);
    res.render("uniDetails", {
      nume: uni.nume,
      description: uni.descriere,
      link: uni.link,
      lat: uni.latitudine,
      long: uni.longitudine,
      img: uni.img,
      email: uni.email,
      facultati: uni.facultati,
      specializari: uni.specializari,
    });
  })();

  });

});


module.exports = router;
