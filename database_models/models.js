var express = require("express");
const mongoose = require("mongoose");
const uniSchema = require("./universitate");
const adminSchema = require("./admin");

const University = new mongoose.model("universitate", uniSchema);
const Admin = new mongoose.model("admin", adminSchema);

module.exports = { University, Admin };
