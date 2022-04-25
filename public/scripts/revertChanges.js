function revertForm() {
    var elements = document.getElementById("add_university").children[1].children[0].children[7].getElementsByTagName('a');
    while(elements.length){
        elements[elements.length-1].remove();
    }
    var photo = document.getElementById("add_university").getElementsByTagName('img');
    if(photo[0] != undefined)
        photo[0].remove();
    var deleteButton = document.getElementById("deleteButton");
    if(deleteButton != undefined){
        deleteButton.remove();
    }
}
