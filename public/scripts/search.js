const searchInput = document.getElementById("search");
const posts = document.querySelectorAll("[universitate]")
searchInput.addEventListener("input",s  => {
    for(var i = 0;i<posts.length;i++){
        console.log();
        var nume_universitate = posts[i].children[0].children[0].children[1].children[0].children[0].innerText.toLowerCase();
        var userInput = s.target.value.toLowerCase();
        if(!nume_universitate.includes(userInput)){
            posts[i].style.display = "none";
        }
        else{
            posts[i].style.display = "block";
        }
    }
});