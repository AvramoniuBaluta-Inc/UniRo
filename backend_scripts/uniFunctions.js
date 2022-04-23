const { University } = require("../database_models/models.js");

function calcDistanta(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = radiani(lat2 - lat1);
  var dLon = radiani(lon2 - lon1);
  var lat1 = radiani(lat1);
  var lat2 = radiani(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

function radiani(Value) {
  return (Value * Math.PI) / 180;
}

module.exports = {
  number_of_elements: async function number_of_elements(req, res) {
    for (let i = 1; 1; i++) {
      const uni = await University.findById(i).exec();
      if (uni === null) return i;
    }
  },
  oras: function oras(uni, req) {
    if (req === "" || req === "Alege...") return true;
    return uni.oras === req;
  },
  facultati: function facultati(uni, req) {
    if (req[0] === "") return true;
    var cntUni = uni.facultati.length;
    var cntFilter = req.length;
    for (var i = 0; i < cntFilter; i++) {
      var ok = false;
      for (var j = 0; j < cntUni; j++) {
        if (uni.facultati[j] === req[i]) {
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
  distanta: function distanta(uni, req_distanta, req_lat, req_lon) {
    if(req_distanta === 1000 || (req_lat === "-1" && req_lon === "-1")) return true;
    if (uni.latitudine == undefined) return true;
    if (
      req_distanta >=
      calcDistanta(uni.latitudine, uni.longitudine, req_lat, req_lon)
    )
      return true;
    return false;
  },
};
