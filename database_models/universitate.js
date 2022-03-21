const mongoose = require("mongoose");
const express = require("express");

const uniSchema = new mongoose.Schema({
  _id: Number,
  nume: String,
  descriere: String,
  oras: String,
  email: String,
  link: String,
  img: {
    data: Buffer,
    contentType: String,
  },
  rating: Number,
  materii: [],
  specializari: [],
});

module.exports = uniSchema;
