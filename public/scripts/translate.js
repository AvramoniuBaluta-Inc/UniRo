function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
        pagelanguage:'ro',
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'googleTranslate'
    );
}


window.onload = function deleteExtraContent(){
    var translateDiv = document.getElementById("googleTranslate");
    console.log(translateDiv.firstChild.firstChild.children[1].firstChild);
    translateDiv.firstChild.firstChild.children[1].firstChild.children[1].remove();
    translateDiv.firstChild.firstChild.children[1].firstChild.children[1].remove();
    translateDiv.firstChild.firstChild.children[1].firstChild.children[2].remove();
    translateDiv.firstChild.firstChild.style.borderColor = "#fff";
}


