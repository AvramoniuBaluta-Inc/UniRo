const { University } = require("../database_models/models.js");
var fetch = require("node-fetch");

async function swapUni(uniArray,length){
    var uniArrayCopy = [];
    uniArrayCopy = await University.find();
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
                facultati: uniArray[i].facultati,
                specializari: uniArray[i].specializari,
                reviewsNo:uniArray[i].reviewsNo,
            //  studenti: uniArray[i].studenti,
            //  public: uniArray[i].public,
            //  camin: uniArray[i].camin,
                viewsNo: uniArray[i].viewsNo,
            }
        };
        await University.updateOne(uniArrayCopy[i], updateDocument1);
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

async function updateRatings() {
    var uniArray = [];
    uniArray = await University.find();
    var length = uniArray.length;
    for(var i=0;i<length;i++){
        var linkGoogleAPI =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    uniArray[i].latitudine +
    "," +
    uniArray[i].longitudine +
    "&radius=1&type=university&name=" +
    uniArray[i].nume +
    "&key=AIzaSyDTMH4Yri3PVdrU0SxRf-CpqqltDWvELdY";
    var data_from_googleAPI;
    var response = await fetch(linkGoogleAPI);
    data_from_googleAPI = await response.json();
    var ratingFromAPI;
    var reviewsNoFromApi;
    if(data_from_googleAPI.results[0] === undefined ){
        ratingFromAPI = 0;
        reviewsNoFromApi  = 0;
    }
    else{
        ratingFromAPI = data_from_googleAPI.results[0].rating;
        reviewsNoFromApi  = data_from_googleAPI.results[0].user_ratings_total;
    }
        var updateDocument1  = {
            $set: {
                rating:ratingFromAPI,
                reviewsNo:reviewsNoFromApi,
            }
        };
        await University.updateOne(uniArray[i] , updateDocument1);
    }  
}

module.exports={
    sortUni:sortUni,
    updateRatings:updateRatings,
};