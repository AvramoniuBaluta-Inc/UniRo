const tags = [];

module.exports = {
  addArray: function add_to_array(req, res) {
    var string = req.body.tags;
    var newTag = "";
    var cnt = string.length;
    var cntTags = 0;
    for (var i = 0; i < cnt; i++) {
      newTag = "";
      while (i < cnt && string[i] != ",") {
        newTag = newTag + string[i];
        i++;
      }
      tags[cntTags] = newTag;
      console.log(newTag);
      cntTags++;
    }
  },
  taguri: tags,
};
