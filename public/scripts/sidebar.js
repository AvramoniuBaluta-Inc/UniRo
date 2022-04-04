function add_university_form(){
    document.getElementById("edit_university").style.display = "none";
    document.getElementById("add_university").style.display = "block";
    document.getElementById("req_to_add_university").style.display = "none";
}
function edit_university_menu(){
  document.getElementById("add_university").style.display = "none";
  document.getElementById("edit_university").style.display = "block";
  document.getElementById("req_to_add_university").style.display = "none";
}
function req_to_add_university_menu(){
  document.getElementById("add_university").style.display = "none";
  document.getElementById("edit_university").style.display = "none";
  document.getElementById("req_to_add_university").style.display = "block";
}

