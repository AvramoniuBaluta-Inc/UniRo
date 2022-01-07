require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose") ;
const multer = require("multer") ;
var fs = require("fs") ;
var path = require("path") ;
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
var homeRoutes = require('./routers/home.js')  ;

///////////////////////////

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()) ;


////////// mongoose connection

app.use(session({
  secret: "cheiedecriptare.a",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const CONNECTION_URL = 'mongodb+srv://admin-calin:admincalin123@cluster0.shfk0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;
const PORT = process.env.PORT || 3000 ;


mongoose.connect(CONNECTION_URL , { useNewUrlParser : true , useUnifiedTopology : true })
    .then( () => app.listen(PORT , () => console.log(`Server running on port ${PORT}`)))
    .catch( (error) => console.log(error.message)) ;

app.use('/home' , homeRoutes) ;