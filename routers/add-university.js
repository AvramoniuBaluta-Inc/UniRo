var express = require("express");
var router = express.Router();
var add = require("../public/scripts/addToArray.js");
const { University } = require("../database_models/models.js");
var idGenerate = require("../backend_scripts/addId.js");
const isLoggedIn = require("../backend_scripts/isLoggedIn.js");
const multer = require("multer");
var fs = require("fs");
var path = require("path");
var allTags = require("../public/scripts/allTags");
var orase = require("../public/scripts/orase");
var materii = require("../public/scripts/materii.js");
var specializari = require("../public/scripts/specializari.js");

///storage
const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./public/uploads/");
  },

  filename: function (request, file, callback) {
    callback(null, file.fieldname + "-" + Math.random().toString().slice(2, 6));
  },
});

const upload = multer({
  storage: storage,
});

router.get("/", isLoggedIn, (req, res) => {
  res.render("add-university", {
    specializari: specializari,
    materii: materii,
    orase: orase,
  });
});

router.post("/", upload.single("photo"), (req, res) => {
  let idUni;
  if (req.file === undefined) {
    (async () => {
      idUni = await idGenerate.generateID(University);
      const universitate = new University({
        _id: idUni,
        nume: req.body.nume,
        descriere: req.body.descriere,
        oras: req.body.oras,
        latitudine: req.body.latitude,
        longitudine: req.body.longitude,
        email: req.body.email,
        link: req.body.link,
        specializari: add.addArray(req.body.specializari),
        materii: add.addArray(req.body.materii),
        rating: req.body.rating,
      });

      if (
        universitate._id === "" ||
        universitate.nume === "" ||
        universitate.descriere === "" ||
        universitate.oras === "" ||
        universitate.email === "" ||
        universitate.link === "" ||
        universitate.rating === ""
      ) {
        console.log("Error : No input");
      } else {
        universitate.save();
      }
    })();
  } else {
    (async () => {
      idUni = await idGenerate.generateID(University);
      const universitate = new University({
        _id: idUni,
        nume: req.body.nume,
        descriere: req.body.descriere,
        oras: req.body.oras,
        latitudine: req.body.latitude,
        longitudine: req.body.longitude,
        email: req.body.email,
        link: req.body.link,
        img: {
          data: fs.readFileSync(
            path.join("./public/uploads/" + req.file.filename)
          ),
          contentType: "image/png",
        },
        specializari: add.addArray(req.body.specializari),
        materii: add.addArray(req.body.materii),
        rating: req.body.rating,
      });
      fs.unlink("./public/uploads/" + req.file.filename, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      if (
        universitate._id === "" ||
        universitate.nume === "" ||
        universitate.descriere === "" ||
        universitate.oras === "" ||
        universitate.email === "" ||
        universitate.link === "" ||
        universitate.rating === ""
      ) {
        console.log("Error : No input");
      } else {
        universitate.save();
      }
    })();
  }

  res.redirect("/add-university");
});

module.exports = router;
