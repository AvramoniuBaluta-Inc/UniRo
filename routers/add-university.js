var express = require("express");
var router = express.Router();
const { University } = require("../database_models/models") ;


router.get("/", (req, res) => {
  res.render("add-university");
});

router.post("/", (req, res) => {
  const universitate = new University({
    _id: req.body._id,
    name: req.body.name,
    descriere: req.body.descriere,
    oras: req.body.oras,
    email: req.body.email,
    link: req.body.link,
  });
  universitate.save();

  res.redirect("/add-university");
});

module.exports = router;