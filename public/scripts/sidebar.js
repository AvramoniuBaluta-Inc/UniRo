function add_university_form() {
  document.getElementById("add_university").children[1][12].value = 1;
  document.getElementById("add_university").children[1][0].value = "";
  document.getElementById("add_university").children[1][1].value = "";
  document.getElementById("add_university").children[1][2].value = "";
  document.getElementById("add_university").children[1][3].value = "";
  document.getElementById("add_university").children[1][4].value = "";
  document.getElementById("add_university").children[1][5].value = "";
  document.getElementById("add_university").children[1][6].value = "";
  document.getElementById("add_university").children[1][7].value = "";
  document.getElementById(
    "add_university"
  ).children[1].children[0].children[2].children[1].children[3].innerHTML =
    "Oras...";
  document
    .getElementById("add_university")
    .children[1].children[0].children[2].children[1].children[3].classList.add(
      "default"
    );
  document.getElementById("edit_university").style.display = "none";
  document.getElementById("add_university").style.display = "block";
  document.getElementById("req_to_add_university").style.display = "none";
  document.getElementById("stats").style.display = "none";
  revertForm();
}

function edit_university_menu() {
  add_university_form();
  document.getElementById("add_university").style.display = "none";
  document.getElementById("edit_university").style.display = "block";
  document.getElementById("req_to_add_university").style.display = "none";
  document.getElementById("stats").style.display = "none";
}
function req_to_add_university_menu() {
  document.getElementById("add_university").style.display = "none";
  document.getElementById("edit_university").style.display = "none";
  document.getElementById("stats").style.display = "none";
  document.getElementById("req_to_add_university").style.display = "block";
}
function stats() {
  document.getElementById("add_university").style.display = "none";
  document.getElementById("edit_university").style.display = "none";
  document.getElementById("stats").style.display = "block";
  document.getElementById("req_to_add_university").style.display = "none";
}
