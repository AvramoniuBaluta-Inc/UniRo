var express = require("express");
const mongoose = require("mongoose");
const facultateSchema = require("./facultate");
const uniSchema = require("./universitate");
const adminSchema = require("./admin");


const University = new mongoose.model("universitate", uniSchema);
const Admin = new mongoose.model("admin", adminSchema);
const Facultate = new mongoose.model("facultate", facultateSchema);

module.exports = { University , Admin , Facultate } ;