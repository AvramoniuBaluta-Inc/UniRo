var express = require("express");
var router = express.Router();
var orase = require("../public/scripts/orase");
var materii = require("../public/scripts/materii.js");
var specializari = require("../public/scripts/specializari.js");

const multer = require("multer");
var add = require("../public/scripts/addToArray.js");

var fs = require("fs");
var path = require("path");
const { Cerere } = require("../database_models/models.js");
var allTags = require("../public/scripts/allTags");
var orase = require("../public/scripts/orase");
var materii = require("../public/scripts/materii.js");
var specializari = require("../public/scripts/specializari.js");
var transformations = require("../backend_scripts/transformations.js");
var fetch = require("node-fetch");

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

router.get("/", function (req, res) {
  res.render("contact", {
    specializari: specializari,
    materii: materii,
    orase: orase,
  });
});

router.post("/", upload.single("photo"), (req, res) => {
  let idUni;
  //////////
  var latitudine = transformations.to_number(req.body.latitude);
  var longitudine = transformations.to_number(req.body.longitude);
  var name_of_uni = transformations.to_url(req.body.nume);
  
  (async () => {
    if (req.file === undefined) {
      (async () => {
        const cerere = new Cerere({
          nume: req.body.nume,
          descriere: req.body.descriere,
          oras: req.body.oras,
          latitudine: req.body.latitude,
          longitudine: req.body.longitude,
          email: req.body.email,
          link: req.body.link,
          specializari: add.addArray(req.body.specializari),
          materii: add.addArray(req.body.materii),
        });

        if (
          cerere._id === "" ||
          cerere.nume === "" ||
          cerere.descriere === "" ||
          cerere.oras === "" ||
          cerere.email === "" ||
          cerere.link === "" ||
          cerere.rating === ""
        ) {
          console.log("Error : No input");
        } else {
          cerere.save();
        }
      })();
    } else {
      (async () => {
        const cerere = new Cerere({
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
        });
        fs.unlink("./public/uploads/" + req.file.filename, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });

        if (
          cerere._id === "" ||
          cerere.nume === "" ||
          cerere.descriere === "" ||
          cerere.oras === "" ||
          cerere.email === "" ||
          cerere.link === "" ||
          cerere.rating === ""
        ) {
          console.log("Error : No input");
        } else {
          cerere.save();
        }
      })();
    }
  })();
  res.redirect("/contact");
});



module.exports = router;
