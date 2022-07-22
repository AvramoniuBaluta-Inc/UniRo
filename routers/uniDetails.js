var express = require("express");
var router = express.Router();
var transformations = require("../backend_scripts/transformations.js");
var badLanguageCheckOk = require("../backend_scripts/badLanguageCheckOk.js");
const { University } = require("../database_models/models.js");
const { Comment } = require("../database_models/models.js");


router.get("/:uni", function (req, res) {
  var uniName =  transformations.toName(req.params.uni);
  var uniId = transformations.toId(req.params.uni);
  University.findOne({ _id: uniId }, function (err, uni) {
    (async()=>{
    var updateDocument  = {
      $set: {
        viewsNo: uni.viewsNo+1,
      }
    };
    const result = await University.updateOne(uni, updateDocument);
    var commentArray = await Comment.find({uniId: uniId},{name:1,content:1,_id:0});
    console.log(commentArray[3]);
    console.log("lol");
    res.render("uniDetails", {
      uniId:uni._id,
      nume: uni.nume,
      description: uni.descriere,
      link: uni.link,
      lat: uni.latitudine,
      long: uni.longitudine,
      img: uni.img,
      email: uni.email,
      facultati: uni.facultati,
      specializari: uni.specializari,
      comments: commentArray,
    });
  })();

  });

});

router.post("/:uni", (req, res) => {
  var content = req.body.commMsg;
  console.log(badLanguageCheckOk.badLanguageCheckOk(content));
  if(badLanguageCheckOk.badLanguageCheckOk(content)){
    const comment = new Comment({
      uniId : req.body.uniId ,
      name: req.body.commName,
      content: req.body.commMsg,
    });

    if(!(comment.content === ""))
      comment.save();
  }
  res.redirect("/universitati/"+ req.body.uniName+"|"+req.body.uniId);
});


module.exports = router;
