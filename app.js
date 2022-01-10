require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const multer = require("multer");
var fs = require("fs");
var path = require("path");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

///////////////////////////

var homeRoutes = require("./routers/home.js");
const uniSchema = require("./database_models/universitate.js");
const facultateSchema = require("./database_models/facultate.js");
const userSchema = require("./database_models/user.js");

///////////////////////////

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

////////// session settings

app.use(
  session({
    secret: "cheiedecriptare.a",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

////////// mongoose connection

const CONNECTION_URL =
  "mongodb+srv://admin:admin-uniro-supermax2004@uniro.kv2pn.mongodb.net/mainDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

const University = new mongoose.model("universitate", uniSchema);
const User = new mongoose.model("user", userSchema);
const facultate = new mongoose.model("facultate", facultateSchema);

////////// main routes

app.use("/", homeRoutes);

/////

//trebuie mutata in alt file dar nu mergea sa fac legatura cu universitate.js
//facem asta maine

app.post("/add-university", function (req, res) {
  const Universitate = mongoose.model("Universitate", uniSchema);
  const universitate = new Universitate({
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

////
