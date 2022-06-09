const mongoose = require("mongoose");
const express = require("express");

const statSchema = new mongoose.Schema({
  views: Number,
  messages: { type: Number, default: 0 },
});

module.exports = statSchema;
