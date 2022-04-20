async function darkStyles() {
  var navbar = document.getElementsByTagName("body")[0];
  navbar.classList.toggle("dark-bg");

  var nav = document.getElementsByClassName("navigation")[0];
  nav.classList.toggle("dark-bg");

  var link1 = document.getElementById("link1");
  var link2 = document.getElementById("link2");
  var link3 = document.getElementById("link3");
  link1.classList.toggle("dark-text");
  link2.classList.toggle("dark-text");
  link3.classList.toggle("dark-text");

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
  var label = document.getElementsByTagName("label");
  for (var i = 0; i < label.length; i++) {
    label[i].classList.toggle("dark");
  }

  var title = document.getElementsByClassName("popUp-title")[0];
  title.classList.add("dark");
  var icon = document.getElementById("popUp-close-button");
  icon.classList.add("dark");
}
