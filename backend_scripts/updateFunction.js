const { University } = require("../database_models/models.js");

async function swapUni(uniArray,length){
    for(var i=0;i<length;i++){
        var updateDocument1  = {
            $set: {
                nume: uniArray[i].nume,
                descriere: uniArray[i].descriere,
                oras: uniArray[i].oras,
                latitudine: uniArray[i].latitudine,
                longitudine: uniArray[i].longitudine,
                email: uniArray[i].email,
                link: uniArray[i].link,
                img: uniArray[i].img,
                rating: uniArray[i].rating,
                materii: uniArray[i].materii,
                specializari: uniArray[i].specializari,
                reviewsNo:uniArray[i].reviewsNo,
            //  studenti: uniArray[i].studenti,
            //  public: uniArray[i].public,
            //  camin: uniArray[i].camin,
                viewsNo: uniArray[i].viewsNo,
            }
        };
        await University.updateOne(await University.findOne({ _id: uniArray[i]._id }) , updateDocument1);
    }

}

async function sortUni() {
    var aux;
    var uniArray = [];
    uniArray = await University.find();
    var length = uniArray.length;
    for(var i = 0;i<length;i++){
        for(var j = i+1;j<length;j++){
            if(uniArray[i].viewsNo<uniArray[j].viewsNo){
                var aux = uniArray[i];
                uniArray[i] = uniArray[j];
                uniArray[j] = aux;
                var auxId = uniArray[i]._id;
                uniArray[i]._id = uniArray[j]._id;
                uniArray[j]._id = auxId;
            }
        }
    }
    await swapUni(uniArray,length);
}

module.exports={
    sortUni:sortUni,
};