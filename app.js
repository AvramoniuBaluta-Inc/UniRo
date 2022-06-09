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
const LocalStrategy = require("passport-local").Strategy;

///////////////////////////

var universitiesRouters = require("./routers/universities.js");
var homeRoutes = require("./routers/home.js");
var adminRoutes = require("./routers/login_admin.js");
var aboutRoutes = require("./routers/about.js");
var contactRoutes = require("./routers/contact.js");
var detailsRoutes = require("./routers/uniDetails.js");
var adsRoutes = require("./routers/ads.js");
var dashboardRoutes = require("./routers/dashboard.js");
var api = require("./routers/api.js");
var stats = require("./routers/stats.js");

const { University, Admin } = require("./database_models/models");

///////////////////////////

const app = express();

app.use(express.static("public"));
app.use("/static", express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 3000;

////////// session settings

app.use(
  session({
    secret: process.env.KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Admin.authenticate()));

passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());
////////// mongoose connection

const CONNECTION_URL =
  "mongodb+srv://" +
  process.env.MONGO_ADMIN +
  ":" +
  process.env.MONGO_PASSWORD +
  "@uniro.kv2pn.mongodb.net/mainDatabase?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

////////// main routes

app.use("/", homeRoutes);
app.use("/admin", adminRoutes);
app.use("/universitati", universitiesRouters.router);
app.use("/despre", aboutRoutes);
app.use("/contact", contactRoutes);
app.use("/universitati", detailsRoutes);
app.use("/ads.txt", adsRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/api", api);
app.use("/stats", stats);
