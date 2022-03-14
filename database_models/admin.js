const mongoose = require("mongoose");
const express = require("express");
var passportLocalMongoose = require("passport-local-mongoose");

const adminSchema = new mongoose.Schema({
  username: String,
  email: String,
});

adminSchema.plugin(passportLocalMongoose);

module.exports = adminSchema;
