function removeDiacritics(nume) {
    var lungime = nume.length;
    for(var i = 0;i<lungime;i++){
        console.log("-------");
        if(nume[i].charCodeAt(0) == 259 || nume[i].charCodeAt(0) == 258 || nume[i].charCodeAt(0) == 226 || nume[i].charCodeAt(0) == 194){
            nume = nume.substring(0,i) + 'a'  + nume.substring(i+1,lungime);
        }
        if(nume[i].charCodeAt(0) == 238 || nume[i].charCodeAt(0) == 206 ){
            nume = nume.substring(0,i) + 'i'  + nume.substring(i+1,lungime);
        }
        if(nume[i].charCodeAt(0) == 351 || nume[i].charCodeAt(0) == 350 || nume[i].charCodeAt(0) == 537 ){
            nume = nume.substring(0,i) + 's'  + nume.substring(i+1,lungime);
        }
        if(nume[i].charCodeAt(0) == 355 || nume[i].charCodeAt(0) == 354 ){
            nume = nume.substring(0,i) + 't'  + nume.substring(i+1,lungime);
        }
    }
    return nume;
}

const searchInput = document.getElementById("search");
const posts = document.querySelectorAll("[universitate]")
searchInput.addEventListener("input",s  => {
    for(var i = 0;i<posts.length;i++){
        var nume_universitate = posts[i].children[0].children[0].children[1].children[0].children[0].innerText.toLowerCase();
        var nume_universitate_fara_diacritice =removeDiacritics(nume_universitate);
        var userInput = s.target.value.toLowerCase();
        if(!nume_universitate.includes(userInput) && !nume_universitate_fara_diacritice.includes(userInput)){
            posts[i].style.display = "none";
        }
        else{
            posts[i].style.display = "block";
        }
    }
});