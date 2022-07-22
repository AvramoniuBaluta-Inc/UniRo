var badWords = require("./badWords")
module.exports = {
    badLanguageCheckOk:function badLanguageCheckOk(content) {
        for(var i = 0; i<badWords.length;i++){
            if(content.indexOf(badWords[i]) >= 0){
                return false;
            }
        }   
        return true;
    },
    
};
