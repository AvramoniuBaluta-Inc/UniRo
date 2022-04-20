var express = require("express");
var router = express.Router();
var add = require("../public/scripts/addToArray.js");
const { University, Cerere } = require("../database_models/models.js");
var idGenerate = require("../backend_scripts/addId.js");
const isLoggedIn = require("../backend_scripts/isLoggedIn.js");
const multer = require("multer");
var fs = require("fs");
var path = require("path");
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

router.get("/", isLoggedIn, (req, res) => {
  var cnt = 1;
  var uniArray = [];
  var uniArrayId = [];
  (async () => {
    uniArray = await University.find();
    var lungime = uniArray.length;
    for (var i = 0; i < lungime; i++) {
      uniArrayId[i] = uniArray[i]._id;
    }
  //  console.log(uniArray[0]);
  Cerere.find({}, (err, cerere) => {
    if (err) {
      console.log(err);
    } else {
      res.render("dashboard", {
        dummyUni: uniArray[0],
        lungime: lungime,
        specializari: specializari,
        uniArray: uniArrayId,
        materii: materii,
        orase: orase,
        items: cerere,
      });
    }
  });
})();
});
router.post("/", upload.single("photo"), (req, res) => {
  let idUni;
  (async() =>{
    if(req.body.toDelete != '-1'){
      var idToDelete = req.body.toDelete;
      await Cerere.findByIdAndDelete(idToDelete);
    }
  })();
  //////////
  if(req.body.toAdd === '1'){
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
    if(data_from_googleAPI.results[0] === undefined ){
      ratingFromAPI = 0;
      reviewsNoFromApi  = 0;
    }
    else{
      ratingFromAPI = data_from_googleAPI.results[0].rating;
      reviewsNoFromApi  = data_from_googleAPI.results[0].user_ratings_total;
    }
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
          rating: ratingFromAPI,
          reviewsNo: reviewsNoFromApi,
          viewsNo:0,
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
          rating: ratingFromAPI,
          reviewsNo: reviewsNoFromApi,
          viewsNo:0,
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
}
else if(req.body.toAdd === '0'){
  //editare
  var uniArray = [];
  var id = req.body.id;
  (async()=>{
    uniArray = await University.find({_id:id});
    var univeristateDeEditat = uniArray[0] ;
    if(req.file === undefined){
      console.log(add.addArray(req.body.specializari));
      var updateDocument  = {
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
          materii: add.addArray(req.body.materii),
          viewsNo:0,
        }
      };
    const result = await University.updateOne(univeristateDeEditat, updateDocument);
    }
    else{
      var updateDocument  = {
        $set: {
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
          viewsNo:0,
        }
      };
    const result = await University.updateOne(univeristateDeEditat, updateDocument);
    }
  })();
  
}
  res.redirect("/dashboard");
});

module.exports = router;
