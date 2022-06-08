const mongoose = require("mongoose");
const express = require("express");
var passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  judet: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = userSchema;
