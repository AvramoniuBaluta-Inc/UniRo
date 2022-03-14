const { University } = require("../database_models/models.js");

module.exports = {
  number_of_elements: async function number_of_elements(req, res) {
    for (let i = 1; 1; i++) {
      const uni = await University.findById(i).exec();
      if (uni === null) return i;
    }
  },
};
