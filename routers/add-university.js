var express = require("express");
var router = express.Router();
var add = require("../public/scripts/addTags.js");
const { University } = require("../database_models/models.js");
var idGenerate = require("../backend_scripts/addId.js");
const isLoggedIn = require("../backend_scripts/isLoggedIn.js");
const multer = require("multer");
var fs = require("fs");
var path = require("path");
var allTags = require("../public/scripts/allTags");

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
    tags: allTags,
  });
});

router.post("/", upload.single("photo"), (req, res) => {
  let idUni;
  add.addArray(req, res);
  if (req.file === undefined) {
    (async () => {
      idUni = await idGenerate.generateID(University);
      const universitate = new University({
        _id: idUni,
        nume: req.body.nume,
        descriere: req.body.descriere,
        oras: req.body.oras,
        email: req.body.email,
        link: req.body.link,
        tags: add.taguri,
      });

      if (
        universitate._id === "" ||
        universitate.nume === "" ||
        universitate.descriere === "" ||
        universitate.oras === "" ||
        universitate.email === "" ||
        universitate.link === ""
      ) {
        console.log("Error : No input");
      } else {
        universitate.save();
        tags = [];
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
        email: req.body.email,
        link: req.body.link,
        img: {
          data: fs.readFileSync(
            path.join("./public/uploads/" + req.file.filename)
          ),
          contentType: "image/png",
        },
        tags: add.taguri,
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
        universitate.link === ""
      ) {
        console.log("Error : No input");
      } else {
        universitate.save();
        tags = [];
      }
    })();
  }

  res.redirect("/add-university");
});

module.exports = router;
