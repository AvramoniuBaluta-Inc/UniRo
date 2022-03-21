module.exports = {
  addArray: function add_to_array(req) {
    var newArray = [];
    var string = req;
    var newTag = "";
    var cnt = string.length;
    var cntTags = 0;
    for (var i = 0; i < cnt; i++) {
      newTag = "";
      while (i < cnt && string[i] != ",") {
        newTag = newTag + string[i];
        i++;
      }
      newArray[cntTags] = newTag;
      cntTags++;
    }
    return newArray;
  },
};
