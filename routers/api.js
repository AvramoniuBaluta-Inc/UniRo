var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const { University } = require("../database_models/models.js");

router.get("/universitati", (req, res) => {
  University.find({}, (err, uni) => {
    if (err) {
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
    if (err) {
      console.log(err);
      res.json("nu exista");
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
        materii: uni.materii,
        specializari: uni.specializari,
        reviewsNo: uni.reviewsNo,
      };

      // poate fi folosit obiectul pentru a modifica datele afisate
      // res.json(object);
      res.json(uni);
    }
  });

  console.log(uniId);
});

module.exports = router;
