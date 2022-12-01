const mongoose = require("mongoose");
const express = require("express");

const uniSchema = new mongoose.Schema({
  _id: Number,
  nume: String,
  descriere: String,
  oras: String,
  latitudine: Number,
  longitudine: Number,
  email: String,
  link: String,
  img: String,
  rating: Number,
  facultati: [],
  specializari: [],
  reviewsNo:Number,
  viewsNo: Number,
});

module.exports = uniSchema;
