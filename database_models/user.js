const mongoose = require("mongoose");
const express = require("express");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  parola: String,
});

module.exports = userSchema;
