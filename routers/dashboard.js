var express = require("express");
var router = express.Router();
var add = require("../public/scripts/addToArray.js");
const { University, Cerere, Admin, Comment  } = require("../database_models/models.js");
var idGenerate = require("../backend_scripts/addId.js");
const isLoggedIn = require("../backend_scripts/isLoggedIn.js");
const multer = require("multer");
var fs = require("fs");
var path = require("path");
var allTags = require("../public/scripts/allTags");
var orase = require("../public/scripts/orase");
var facultati = require("../public/scripts/facultati.js");
var specializari = require("../public/scripts/specializari.js");
var transformations = require("../backend_scripts/transformations.js");
var updateFunctions = require("../backend_scripts/updateFunctions.js");
var imagekitFunctions = require("../backend_scripts/imagekitFunctions.js")


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

router.get("/", isLoggedIn, (req, res) => {
  var cnt = 1;
  var uniArray = [];
  var uniArrayId = [];
  var adminArray = [];
  var adminCounter = 0;

  var vizionari = 0;

  (async () => {
    uniArray = await University.find({}, { _id: 1 });
    var lungime = uniArray.length;

    adminArray = await Admin.find({});
    adminCounter = adminArray.length;

    for (var i = 0; i < lungime; i++) {
      uniArrayId[i] = uniArray[i]._id;
    }

    var dummyUni = await University.findById(uniArrayId[0]);

    Cerere.find({}, (err, cerere) => {
      if (err) {
        console.log(err);
      } else {
        res.render("dashboard", {
          dummyUni: dummyUni,
          lungime: lungime,
          specializari: specializari,
          uniArray: uniArrayId,
          facultati: facultati,
          orase: orase,
          items: cerere,
          adminCounter: adminCounter,
          vizionari: vizionari,
        });
      }
    });
  })();
});
router.post("/", upload.single("photo"), (req, res) => {
  let idUni;
  //////////
  if (req.body.toAdd === "1") {
    var latitudine = transformations.to_number(req.body.latitude);
    var longitudine = transformations.to_number(req.body.longitude);
    var name_of_uni = transformations.to_url(req.body.nume);
    var linkGoogleAPI =
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
      latitudine +
      "," +
      longitudine +
      "&radius=1&type=university&name=" +
      name_of_uni +
      "&key=AIzaSyDTMH4Yri3PVdrU0SxRf-CpqqltDWvELdY";
    var data_from_googleAPI;
    (async () => {
      var response = await fetch(linkGoogleAPI);
      data_from_googleAPI = await response.json();
      var ratingFromAPI;
      var reviewsNoFromApi;
      if (data_from_googleAPI.results[0] === undefined) {
        ratingFromAPI = 0;
        reviewsNoFromApi = 0;
      } else {
        ratingFromAPI = data_from_googleAPI.results[0].rating;
        reviewsNoFromApi = data_from_googleAPI.results[0].user_ratings_total;
      }
      if (req.file === undefined) {
        var idToDelete = req.body.toDelete;
        if (req.body.toDelete != "-1") {
          var cerere = await Cerere.find({ _id: idToDelete });
          if (req.body.toDelete != "-1") {
            var idToDelete = req.body.toDelete;
            await Cerere.findByIdAndDelete(idToDelete);
          }
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
              img: cerere[0].universitate.img,
              specializari: add.addArray(req.body.specializari),
              facultati: add.addArray(req.body.facultati),
              rating: ratingFromAPI,
              reviewsNo: reviewsNoFromApi,
              viewsNo: 0,
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
              specializari: add.addArray(req.body.specializari),
              facultati: add.addArray(req.body.facultati),
              rating: ratingFromAPI,
              reviewsNo: reviewsNoFromApi,
              viewsNo: 0,
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
      } else {
        if (req.body.toDelete != "-1") {
          var idToDelete = req.body.toDelete;
          await Cerere.findByIdAndDelete(idToDelete);
        }
        (async () => {
          idUni = await idGenerate.generateID(University);
          var imgLink = await imagekitFunctions.getLink(req.file);
          const universitate = new University({
            _id: idUni,
            nume: req.body.nume,
            descriere: req.body.descriere,
            oras: req.body.oras,
            latitudine: req.body.latitude,
            longitudine: req.body.longitude,
            email: req.body.email,
            link: req.body.link,
            img: imgLink,
            specializari: add.addArray(req.body.specializari),
            facultati: add.addArray(req.body.facultati),
            rating: ratingFromAPI,
            reviewsNo: reviewsNoFromApi,
            viewsNo: 0,
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
    })();
  } else if (req.body.toAdd === "0") {
    //editare
    var uniArray = [];
    var id = req.body.id;
    (async () => {
      uniArray = await University.find({ _id: id });
      var univeristateDeEditat = uniArray[0];

      if (req.file === undefined) {
        var updateDocument = {
          $set: {
            _id: idUni,
            nume: req.body.nume,
            descriere: req.body.descriere,
            oras: req.body.oras,
            latitudine: req.body.latitude,
            longitudine: req.body.longitude,
            email: req.body.email,
            link: req.body.link,
            specializari: add.addArray(req.body.specializari),
            facultati: add.addArray(req.body.facultati),
            viewsNo: univeristateDeEditat.viewsNo,
          },
        };
        
        const result = await University.updateOne(
          univeristateDeEditat,
          updateDocument
        );
      } else {
        var imgLink = await imagekitFunctions.getLink(req.file);

        var updateDocument = {
          $set: {
            _id: idUni,
            nume: req.body.nume,
            descriere: req.body.descriere,
            oras: req.body.oras,
            latitudine: req.body.latitude,
            longitudine: req.body.longitude,
            email: req.body.email,
            link: req.body.link,
            img: imgLink,
            specializari: add.addArray(req.body.specializari),
            facultati: add.addArray(req.body.facultati),
            viewsNo: univeristateDeEditat.viewsNo,
          },
        };
        fs.unlink("./public/uploads/" + req.file.filename, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
        const result = await University.updateOne(
          univeristateDeEditat,
          updateDocument
        );
      }
    })();
  } else {
    (async () => {
      if (req.body.toDelete != "-1") {
        var idToDelete = req.body.toDelete;
        await Cerere.findByIdAndDelete(idToDelete);
      }
    })();
  }
  res.redirect("/dashboard");
});

router.post("/update", function (req, res) {
  (async () => {
    await updateFunctions.updateRatings();
    res.redirect("/");
  })();
});

router.get("/delete/:id", function (req, res) {
  (async () => {
    if (req.params.id != undefined)
      var result = await University.findOneAndDelete({ _id: req.params.id });
    res.redirect("/dashboard");
  })();
});

router.get("/deletecomment/:id", function (req, res) {
  (async () => {
    if (req.params.id != undefined)
      var comm = await Comment.findOne({"_id": req.params.id});
      var result = await Comment.findOneAndDelete({"_id": req.params.id});
      var uni = await University.findOne({"_id":comm.uniId})
    res.redirect("/universitati/" + uni.nume + '|' + comm.uniId+"#scroll-to-bottom");
  })();
});

module.exports = router;
