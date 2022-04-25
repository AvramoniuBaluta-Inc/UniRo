const { University } = require("../database_models/models.js");
var fetch = require("node-fetch");

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
    updateRatings:updateRatings,
};