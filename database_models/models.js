var express = require("express");
const mongoose = require("mongoose");
const uniSchema = require("./universitate");
const adminSchema = require("./admin");
const cerereSchema = require("./cerere");
const userSchema = require("./user");
const statSchema = require("./stats");
const commentSchema = require("./comment");

const University = new mongoose.model("universitate", uniSchema);
const Admin = new mongoose.model("admin", adminSchema);
const Cerere = new mongoose.model("cerere", cerereSchema);
const User = new mongoose.model("user", userSchema);
const Stat = new mongoose.model("stat", statSchema);
const Comment = new mongoose.model("comment", commentSchema)

module.exports = { University, Admin, Cerere, User, Stat, Comment };
