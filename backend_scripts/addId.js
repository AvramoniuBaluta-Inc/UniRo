
module.exports = {
  generateID: async function add_id(Model) {
    for (let i = 1; 1; i++) {
      const uni = await Model.findById(i).exec();
      if (uni === null) return i;
    }
  },
};
