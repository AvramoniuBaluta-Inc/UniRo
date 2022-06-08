var express = require("express");
const mongoose = require("mongoose");
const uniSchema = require("./universitate");
const adminSchema = require("./admin");
const cerereSchema = require("./cerere");
const userSchema = require("./user");

const University = new mongoose.model("universitate", uniSchema);
const Admin = new mongoose.model("admin", adminSchema);
const Cerere = new mongoose.model("cerere", cerereSchema);
const User = new mongoose.model("user", userSchema);

module.exports = { University, Admin, Cerere, User };
