var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const { Admin } = require("../database_models/models");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

router.get("/", (req, res) => {
  res.render("login_admin");
});

// admin login post route
router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/admin",
  }),
  (req, res) => {
    console.log("siuuuu");
  }
);

// admin register post route
router.post("/register", (req, res) => {
  const Admins = new Admin({
    username: req.body.username,
    email: req.body.email,
  });

  if (req.body.admin === process.env.AAA) {
    Admin.register(Admins, req.body.password, function (err, user) {
      if (err) {
        console.log("fail");
      } else {
        res.redirect("/admin");
        console.log("succes");
      }
    });
  } else {
    console.log("gresit sefu");
    res.redirect("/admin");
  }
});

router.post("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect("/");
});

module.exports = router;
