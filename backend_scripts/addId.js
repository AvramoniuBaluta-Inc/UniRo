const { University } = require("../database_models/models.js");

module.exports = {
  generateID: async function add_id() {
    var ok = 0;
    for (let i = 1; 1; i++) {
      const uni = await University.findById(i).exec();
      if (uni === null) return i;
    }
  },
};
