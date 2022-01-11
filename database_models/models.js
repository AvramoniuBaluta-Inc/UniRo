var express = require("express");
const mongoose = require("mongoose");
const facultateSchema = require("./facultate");
const uniSchema = require("./universitate");
const userSchema = require("./user");


const University = new mongoose.model("universitate", uniSchema);
const User = new mongoose.model("user", userSchema);
const Facultate = new mongoose.model("facultate", facultateSchema);

module.exports = { University , User , Facultate } ;