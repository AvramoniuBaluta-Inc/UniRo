const mongoose = require("mongoose") ;
const express = require("express") ;

const uniSchema = new mongoose.Schema({
    nume : String ,
    descriere : String ,
    email : String ,
    link : String ,
    img :
    {
        data: Buffer,
        contentType: String
    } ,
    rating : Number ,

}) ;

module.exports = uniSchema ;