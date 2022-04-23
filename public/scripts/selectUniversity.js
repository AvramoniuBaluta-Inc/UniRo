
document.querySelectorAll('[universitate]').forEach(item => {
  console.log(item);
    selectUni(item);
  });
  document.getElementById("photo").addEventListener('change',function(){
    var photo = document.getElementById("add_university").getElementsByClassName('edit_photo');
    if(photo[0]!=undefined)
        photo[0].remove();
  });
function selectUni(item) {
    item.addEventListener('click', event => {
      document.getElementById("edit_university").style.display = "none";
      document.getElementById("add_university").style.display = "block";
      document.getElementById("add_university").children[1][12].value = 0;
      document.getElementById("add_university").children[1][0].value = item.children[1].children[0].innerText;
      document.getElementById("add_university").children[1][1].value = item.children[0].children[0].children[1].children[0].children[3].innerText;
      document.getElementById("add_university").children[1][2].value = item.children[1].children[1].innerText;
      document.getElementById("add_university").children[1].children[0].children[2].children[1].children[3].innerHTML = item.children[1].children[1].innerText;
      document.getElementById("add_university").children[1].children[0].children[2].children[1].children[3].classList.remove("default");
      document.getElementById("add_university").children[1][4].value = item.children[1].children[3].innerText;
      document.getElementById("add_university").children[1][5].value = item.children[1].children[2].innerText;
      document.getElementById("add_university").children[1][6].value = item.children[1].children[4].innerText;
      document.getElementById("add_university").children[1][7].value = item.children[1].children[5].innerText;
      document.getElementById("add_university").children[1][12].value = 0;
      addFacultati(item);
      addSpecializari(item);
      document.getElementById("add_university").getElementsByClassName('idOfUni')[0].value = item.getElementsByClassName('idOfUni')[0].innerHTML;
      console.log(item.getElementsByClassName('idOfUni')[0].innerHTML);
      var images = item.getElementsByClassName("img-size");
      var image = document.createElement('div');
      image.setAttribute('class', "edit_photo");
      image.innerHTML = images[0].innerHTML;
      document.getElementById("add_university").children[1].appendChild(image);
      document.getElementById("add_university").children[1].insertBefore(image,document.getElementById("add_university").children[1].children[4])
    });
  }
