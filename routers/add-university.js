var express = require("express");
var router = express.Router();
var add = require("../public/scripts/addTags.js");
const { University } = require("../database_models/models");

router.get("/", (req, res) => {
  res.render("add-university");
});

router.post("/", (req, res) => {
  add.addArray(req, res);
  //console.log(taguri);
  const universitate = new University({
    _id: req.body._id,
    nume: req.body.nume,
    descriere: req.body.descriere,
    oras: req.body.oras,
    email: req.body.email,
    link: req.body.link,
    tags: add.taguri,
  });

  if(universitate._id === "" || universitate.nume === "" || universitate.descriere === "" || universitate.oras === "" || universitate.email === "" || universitate.link === "") {
    console.log("Error : No input");
  } else {
    universitate.save();
    tags = [] ;
  }
  
  res.redirect("/add-university");
});

module.exports = router;
