const mongoose = require("mongoose");
const express = require("express");

const statSchema = new mongoose.Schema({
  views: Number,
  messages: Number,
});

module.exports = statSchema;
