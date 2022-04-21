const { University } = require("../database_models/models.js");

async function swapUni(Uni1,Uni2){
var uni1 = Uni1;
var uni2 = Uni2;
var id1 = uni1._id;
var id2 = uni2._id;
    var updateDocument2  = {
        $set: {
            nume: uni1.nume,
            descriere: uni1.descriere,
            oras: uni1.oras,
            latitudine: uni1.latitudine,
            longitudine: uni1.longitudine,
            email: uni1.email,
            link: uni1.link,
            img: uni1.img,
            rating: uni1.rating,
            materii: uni1.materii,
            specializari: uni1.specializari,
            reviewsNo:uni1.reviewsNo,
          //  studenti: uni1.studenti,
          //  public: uni1.public,
          //  camin: uni1.camin,
            viewsNo: uni1.viewsNo,
        }
    };

    var updateDocument1  = {
        $set: {
            nume: uni2.nume,
            descriere: uni2.descriere,
            oras: uni2.oras,
            latitudine: uni2.latitudine,
            longitudine: uni2.longitudine,
            email: uni2.email,
            link: uni2.link,
            img: uni2.img,
            rating: uni2.rating,
            materii: uni2.materii,
            specializari: uni2.specializari,
            reviewsNo:uni2.reviewsNo,
          //  studenti: uni2.studenti,
          //  public: uni2.public,
          //  camin: uni2.camin,
            viewsNo: uni2.viewsNo,
        }
    };
    console.log("---------------");
    console.log(Uni1.nume);
    console.log(Uni2.nume);
console.log("+++++++");
    await University.updateOne(await University.findOne({ _id: id1 }) , updateDocument1);
    await University.updateOne(await University.findOne({ _id: id2 }), updateDocument2);
    console.log(Uni1.nume);
    console.log(Uni2.nume);
    console.log("---------------");

}

async function sortUni() {
    var aux;
    var uniArray = [];
    uniArray = await University.find();
    var length = uniArray.length;
    for(var i = 0;i<length;i++){
        for(var j = i+1;j<length;j++){
            if(uniArray[i].viewsNo<uniArray[j].viewsNo){
                swapUni(uniArray[i],uniArray[j]);
                var aux = uniArray[i];
                uniArray[i] = uniArray[j];
                uniArray[j] = aux;
            }
        }
    
    }
}

module.exports={
    sortUni:sortUni,
};