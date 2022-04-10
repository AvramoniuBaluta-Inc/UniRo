function addMaterii(item) {
    var materii =  item.getElementsByClassName("materii");
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
 //  document.getElementById("add_university").children[1].children[0].insertBefore();
    }
  }