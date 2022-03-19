const { University } = require("../database_models/models.js");

module.exports = {
  number_of_elements: async function number_of_elements(req, res) {
    for (let i = 1; 1; i++) {
      const uni = await University.findById(i).exec();
      if (uni === null) return i;
    }
  },
  oras: function oras(uni, req) {
    if (req === "Alege...") return true;
    return uni.oras === req;
  },
  materii: function materii(uni, req) {
    console.log(req);
    if (req === "Alege...") return true;
    var cnt = uni.tags.length;
    for (var i = 0; i < cnt; i++) {
      if (uni.tags[i] === req) return true;
    }
    return false;
  },
  rating: function rating(uni, req) {
    if (req === "Alege...") return true;
    return true;
  },
  specializare: function specializare(uni, req) {
    if (req === "Alege...") return true;
    var cnt = uni.tags.length;
    for (var i = 0; i < cnt; i++) {
      if (uni.tags[i] === req) return true;
    }
    return false;
  },
  distanta: function distanta(uni, req) {
    // if (req === "Alege...") return true;
    return true;
  },
};
