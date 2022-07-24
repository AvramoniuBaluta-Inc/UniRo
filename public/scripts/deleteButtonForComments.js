function link(string){
    var newString="";
    var cnt = 0;
    for(var i=0;i<string.length;i++){
        if(string[i]==='/'){
            cnt++;
        }
        if(cnt===3)
            break;
        newString = newString + string[i];
    }
    return newString;
}

window.onload = function() {
var isAuth = document.getElementById("isAuth").innerText;
console.log(isAuth);
if(isAuth === "true"){
    var comments = document.getElementsByClassName("comment-message-box");
    console.log("okok");
    for(var i = 0;i < comments.length; i++){
        var deleteButton = document.createElement('a');
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("deleteCommentButton");
        deleteButton.href = link(window.location.href) +"/dashboard/deletecomment/"+ comments[i].getElementsByClassName("commentId")[0].innerText;
        comments[i].appendChild(deleteButton);
        console.log(comments[i]);
    }
}

};