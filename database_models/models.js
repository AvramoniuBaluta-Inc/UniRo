var express = require("express");
const mongoose = require("mongoose");
const uniSchema = require("./universitate");
const adminSchema = require("./admin");
const cerereSchema = require("./cerere");

const University = new mongoose.model("universitate", uniSchema);
const Admin = new mongoose.model("admin", adminSchema);
const Cerere = new mongoose.model("cerere",cerereSchema);

module.exports = { University, Admin, Cerere };
