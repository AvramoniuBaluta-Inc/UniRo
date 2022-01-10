const mongoose = require("mongoose");
const express = require("express");

const facultateSchema = new mongoose.Schema({
  _id: Number,
  nume: String,
  oras: String,
  descriere: String,
  email: String,
  link: String,
  img: {
    data: Buffer,
    contentType: String,
  },
  rating: Number,
  tags: [],
});

module.exports = facultateSchema;
