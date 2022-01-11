const tags = [];

module.exports = {
  addArray: function add_to_array(req, res) {
    var tag = "tag1";
    console.log(req.body[tag]);
    for (var i = "1"; 1; i++) {
      tag = "tag" + i;
      if (req.body[tag] === undefined) break;
      tags[i - "0" - 1] = req.body[tag];
    }
  },
  taguri: tags,
};
