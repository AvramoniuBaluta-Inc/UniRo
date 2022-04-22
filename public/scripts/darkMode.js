async function darkStyles() {
  if(localStorage.getItem("isDarkMode") === null){
    localStorage.setItem("isDarkMode","false");
    document.getElementsByTagName("body")[0].style.backgroundColor  = " #fff";
    return;
  }
  else if(localStorage.getItem("isDarkMode")==="true" && document.getElementById("darkTheme").innerText==="1"){
    localStorage.setItem("isDarkMode","false");
    document.getElementsByTagName("body")[0].style.backgroundColor  = "#fff";
  }
  else{
    document.getElementsByTagName("body")[0].style.backgroundColor  = "#191919";
    localStorage.setItem("isDarkMode","true");
  }
  var isDarkTheme = document.getElementById("darkTheme");
  if (isDarkTheme.innerHTML === "0") {
    isDarkTheme.innerHTML = "1";
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    link1.children[0].style.color = "white";
    link2.children[0].style.color = "white";
    link3.children[0].style.color = "white";
  } else {
    isDarkTheme.innerHTML = "0";
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    link1.children[0].style.color = "black";
    link2.children[0].style.color = "black";
    link3.children[0].style.color = "black";
  }
  var navbar = document.getElementsByTagName("body")[0];
  navbar.classList.toggle("dark-bg");

  var nav = document.getElementsByClassName("navigation")[0];
  nav.classList.toggle("dark-bg");

  var searchBar = document.getElementById("search");
  searchBar.classList.toggle("transparent");

  var navBtn = document.getElementsByClassName("nav-btn");
  for (var i = 0; i < navBtn.length; i++) {
    navBtn[i].classList.toggle("dark-btn");
  }

  // card styles

  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("dark-card");
  }

  var detailsBtn = document.getElementsByClassName("buton-link");
  for (var i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].classList.toggle("dark-btn");
  }

  var materiiBtn = document.getElementsByClassName("mat-btn");
  for (var i = 0; i < materiiBtn.length; i++) {
    materiiBtn[i].classList.toggle("materii-dark");
  }

  // popup styles

  var popup = document.getElementById("popUp");
  popup.classList.toggle("dark-bg");

  var label = document.getElementsByTagName("label");
  for (var i = 0; i < label.length; i++) {
    label[i].classList.toggle("dark-text");
  }

  var title = document.getElementsByClassName("popUp-title")[0];
  title.classList.toggle("dark-text");
  var icon = document.getElementById("popUp-close-button");
  icon.classList.toggle("dark-text");
}

function changeIcon() {
  darkMode = document.getElementById("floatingBtn");
  if (darkMode.classList.contains("fa-moon")) {
    darkMode.classList.replace("fa-moon", "fa-sun");
    darkMode.classList.replace("fa", "fas");
  } else {
    darkMode.classList.replace("fa-sun", "fa-moon");
  }
}


// am facut functii diferite pt fiecare pagina ca sa putem sa le modificam usor daca mai vrem sa adaugam cv 
function detailsDark() {

  if(localStorage.getItem("isDarkMode") === null){
    localStorage.setItem("isDarkMode","false");
    document.getElementsByTagName("body")[0].style.backgroundColor  = " #fff";
    document.getElementsByTagName("nav")[0].style.backgroundColor  = " #fff";

    return;
  }
  else if(localStorage.getItem("isDarkMode")==="true" && document.getElementById("darkTheme").innerText==="1"){
    localStorage.setItem("isDarkMode","false");
    document.getElementsByTagName("body")[0].style.backgroundColor  = "#fff";
    document.getElementsByTagName("nav")[0].style.backgroundColor  = " #fff";

  }
  else{
    document.getElementsByTagName("body")[0].style.backgroundColor  = " #191919";
    document.getElementsByTagName("nav")[0].style.backgroundColor  = "#191919";
    localStorage.setItem("isDarkMode","true");
  }

  var nav = document.getElementsByClassName("navigation")[0];
  nav.classList.toggle("dark-bg");
  
  var visitBtn = document.getElementById("visit");
  visitBtn.classList.toggle("dark-btn");

  var mainBody = document.getElementsByTagName("body")[0];
  mainBody.classList.toggle("dark-bg");

  var tableElements = document.getElementsByTagName("tr");
  for(var i = 0 ; i<tableElements.length; i++) {
    tableElements[i].classList.toggle("dark-text");
  }
var table = document.getElementsByTagName("table")[0];
console.log(table);
table.classList.toggle("table-dark");


  var isDarkTheme = document.getElementById("darkTheme");
  if (isDarkTheme.innerHTML === "0") {
    isDarkTheme.innerHTML = "1";
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    link1.children[0].style.color = "white";
    link2.children[0].style.color = "white";
    link3.children[0].style.color = "white";
  } else {
    isDarkTheme.innerHTML = "0";
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    link1.children[0].style.color = "black";
    link2.children[0].style.color = "black";
    link3.children[0].style.color = "black";
  }

  
}