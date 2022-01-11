var express = require("express");
var router = express.Router();
const { University } = require("../database_models/models");

router.get("/", (req, res) => {
  res.render("add-university");
});

router.post("/", (req, res) => {
  var tag = "tag1";
  const taguri = [];
  console.log(req.body[tag]);
  for (var i = "1"; 1; i++) {
    tag = "tag" + i;
    if (req.body[tag] === undefined) break;
    taguri[i - "0" - 1] = req.body[tag];
  }
  //console.log(taguri);

  const universitate = new University({
    _id: req.body._id,
    name: req.body.name,
    descriere: req.body.descriere,
    oras: req.body.oras,
    email: req.body.email,
    link: req.body.link,
    tags: taguri,
  });
  universitate.save();

  res.redirect("/add-university");
});

module.exports = router;
