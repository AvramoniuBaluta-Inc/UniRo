var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const { University } = require("../database_models/models.js");

router.get("/universitati", (req, res) => {
  University.find({}, (err, uni) => {
    if (uni === null) {
      console.log(err);
    } else {
      // afiseaza toate obiectele json din baza de date
      res.json(uni);
    }
  });
});

router.get("/universitati/:id", (req, res) => {
  const uniId = req.params.id;

  University.findOne({ _id: uniId }, (err, uni) => {
    if (uni === null) {
      console.log(err);
      res.json(null);
    } else {
      const object = {
        _id: uni._id,
        nume: uni.nume,
        descriere: uni.descriere,
        oras: uni.oras,
        latitudine: uni.latitudine,
        longitudine: uni.longitudine,
        email: uni.email,
        link: uni.link,
        img: uni.img,
        rating: uni.rating,
        facultati: uni.facultati,
        specializari: uni.specializari,
        reviewsNo: uni.reviewsNo,
        viewsNo:uni.viewsNo,
      };
      // poate fi folosit obiectul pentru a modifica datele afisate
      // res.json(object);
      res.json(object);
    }
  });
});

module.exports = router;
