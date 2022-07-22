const mongoose = require("mongoose");
const express = require("express");

const commentSchema = new mongoose.Schema({
    uniId: Number,
    name: String,
    content: String,
    date: String,
    ip: String,
});

module.exports = commentSchema;
