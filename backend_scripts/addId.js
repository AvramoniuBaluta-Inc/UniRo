const { University } = require("../database_models/models.js");

module.exports = {
  generateID: async function add_id() {
    for (let i = 1; 1; i++) {
      const uni = await University.findById(i).exec();
      if (uni === null) return i;
    }
  },
};
