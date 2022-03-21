const { University } = require("../database_models/models.js");

module.exports = {
  number_of_elements: async function number_of_elements(req, res) {
    for (let i = 1; 1; i++) {
      const uni = await University.findById(i).exec();
      if (uni === null) return i;
    }
  },
  oras: function oras(uni, req) {
    if (req === "") return true;
    return uni.oras === req;
  },
  materii: function materii(uni, req) {
    if (req[0] === "") return true;
    var cntUni = uni.materii.length;
    var cntFilter = req.length;
    for (var i = 0; i < cntFilter; i++) {
      var ok = false;
      for (var j = 0; j < cntUni; j++) {
        if (uni.materii[j] === req[i]) {
          ok = true;
        }
      }
      if (ok === false) return false;
    }
    return true;
  },
  rating: function rating(uni, req) {
    if (req === "Alege...") return true;
    var value = req[0] - "0";
    return uni.rating >= value;
  },
  specializare: function specializare(uni, req) {
    if (req[0] === "") return true;
    var cntUni = uni.specializari.length;
    var cntFilter = req.length;
    for (var i = 0; i < cntFilter; i++) {
      var ok = false;
      for (var j = 0; j < cntUni; j++) {
        if (uni.specializari[j] === req[i]) {
          ok = true;
        }
      }
      if (ok === false) return false;
    }
    return true;
  },
  distanta: function distanta(uni, req) {
    // if (req === "Alege...") return true;
    return true;
  },
};
