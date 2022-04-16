const mongoose = require("mongoose");
const express = require("express");
const uniSchema = require("./universitate");

const cerereSchema = new mongoose.Schema({
  _id: Number,
  nume_reprezentant: String,
  prenume_reprezentant: String,
  email_reprezentant: String,
  universitate: {
    type :   uniSchema,
  }
});

module.exports = cerereSchema;
