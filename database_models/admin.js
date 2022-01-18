const mongoose = require("mongoose");
const express = require("express");

const adminSchema = new mongoose.Schema({
  username: String,
  email: String,
  parola: String,
});

module.exports = adminSchema;
