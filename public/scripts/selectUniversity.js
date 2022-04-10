function addMaterii(item) {
  var materii =  item.getElementsByClassName("item");
  console.log();
  for(var i = 0;i<materii.length;i++){
   // console.log(materii[i].innerText);
    var materie = document.createElement('a');
    materie.setAttribute('class', "ui label transition visible");
    materie.setAttribute('data-value', materii[i].innerText);
    materie.setAttribute('style', "display: inline-block !important;");
    console.log();
    if(document.getElementById("meteriiInput").value === ""){
      document.getElementById("meteriiInput").value =  materii[i].innerText;
    }
    else{
      document.getElementById("meteriiInput").value = document.getElementById("meteriiInput").value +',' + materii[i].innerText;
    }
    materie.innerHTML = materii[i].innerText+'<i class="delete icon"></i>';
    document.getElementById("add_university").children[1].children[0].children[7].children[0].children[1].appendChild(materie);
    document.getElementById("add_university").children[1].children[0].children[7].children[0].children[1].insertBefore(materie,document.getElementById("add_university").children[1].children[0].children[7].children[0].children[1].firstChild);
  
  }
}

function addSpecializari(item) {
  var specializari =  item.getElementsByClassName("tag");
  console.log();
  for(var i = 0;i<specializari.length;i++){
   // console.log(materii[i].innerText);
    var materie = document.createElement('a');
    materie.setAttribute('class', "ui label transition visible");
    materie.setAttribute('data-value', specializari[i].innerText);
    materie.setAttribute('style', "display: inline-block !important;");
    console.log();
    if(document.getElementById("specializariInput").value === ""){
      document.getElementById("specializariInput").value =  specializari[i].innerText;
    }
    else{
      document.getElementById("specializariInput").value = document.getElementById("specializariInput").value +',' + specializari[i].innerText;
    }
    materie.innerHTML = specializari[i].innerText+'<i class="delete icon"></i>';
    document.getElementById("add_university").children[1].children[0].children[7].children[1].children[1].appendChild(materie);
    document.getElementById("add_university").children[1].children[0].children[7].children[1].children[1].insertBefore(materie,document.getElementById("add_university").children[1].children[0].children[7].children[1].children[1].firstChild);
  
  }
}

document.querySelectorAll('[universitate]').forEach(item => {
    item.addEventListener('click', event => {
        document.getElementById("edit_university").style.display = "none";
        document.getElementById("add_university").style.display = "block";
        document.getElementById("add_university").children[1][12].value = 0;
        document.getElementById("add_university").children[1][0].value = item.children[1].children[0].innerText;;
        document.getElementById("add_university").children[1][1].value = item.children[0].children[0].children[1].children[0].children[3].innerText;
        document.getElementById("add_university").children[1][2].value = item.children[1].children[0].innerText;
        document.getElementById("add_university").children[1][3].value = item.children[1].children[1].innerText;
        document.getElementById("add_university").children[1][4].value = item.children[1].children[2].innerText;
        document.getElementById("add_university").children[1][5].value = item.children[1].children[3].innerText;
        document.getElementById("add_university").children[1][6].value = item.children[1].children[4].innerText;
        document.getElementById("add_university").children[1][7].value = item.children[1].children[5].innerText;
        document.getElementById("add_university").children[1][12].value = 0;
        addMaterii(item);
        addSpecializari(item);
    });
  });
//  '<a class="ui label transition visible" data-value="'+materii[i].innerText+'" style="display: inline-block !important;">