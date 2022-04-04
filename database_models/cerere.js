const mongoose = require("mongoose");
const express = require("express");

const cerereSchema = new mongoose.Schema({
  nume: String,
  descriere: String,
  oras: String,
  latitudine: Number,
  longitudine: Number,
  email: String,
  link: String,
  img: {
    data: Buffer,
    contentType: String,
  },
  materii: [],
  specializari: [],
  studenti: Number,
  public: Boolean,
  camin: Boolean,
});

module.exports = cerereSchema;
