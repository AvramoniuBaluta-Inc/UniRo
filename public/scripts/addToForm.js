function addFacultati(item) {
    var facultati =  item.getElementsByClassName("materii");
    document.getElementById("meteriiInput").value = "";
    for(var i = 0;i<facultati.length;i++){
      var facultate = document.createElement('a');
      facultate.setAttribute('class', "ui label transition visible");
      facultate.setAttribute('data-value', facultati[i].innerText);
      facultate.setAttribute('style', "display: inline-block !important;");
      if(document.getElementById("meteriiInput").value === ""){
        document.getElementById("meteriiInput").value =  facultati[i].innerText;
      }
      else{
        document.getElementById("meteriiInput").value = document.getElementById("meteriiInput").value +',' + facultati[i].innerText;
      }
      facultate.innerHTML = facultati[i].innerText+'<i class="delete icon"></i>';
      document.getElementById("add_university").children[1].children[0].children[7].children[0].children[1].appendChild(facultate);
      document.getElementById("add_university").children[1].children[0].children[7].children[0].children[1].insertBefore(facultate,document.getElementById("add_university").children[1].children[0].children[7].children[0].children[1].firstChild);
    
    }
  }
  
  function addSpecializari(item) {
    var specializari =  item.getElementsByClassName("tag");
    document.getElementById("specializariInput").value = "";
    for(var i = 0;i<specializari.length;i++){
      var facultate = document.createElement('a');
      facultate.setAttribute('class', "ui label transition visible");
      facultate.setAttribute('data-value', specializari[i].innerText);
      facultate.setAttribute('style', "display: inline-block !important;");
      if(document.getElementById("specializariInput").value === ""){
        document.getElementById("specializariInput").value =  specializari[i].innerText;
      }
      else{
        document.getElementById("specializariInput").value = document.getElementById("specializariInput").value +',' + specializari[i].innerText;
      }
      facultate.innerHTML = specializari[i].innerText+'<i class="delete icon"></i>';
      document.getElementById("add_university").children[1].children[0].children[7].children[1].children[1].appendChild(facultate);
      document.getElementById("add_university").children[1].children[0].children[7].children[1].children[1].insertBefore(facultate,document.getElementById("add_university").children[1].children[0].children[7].children[1].children[1].firstChild);
 //  document.getElementById("add_university").children[1].children[0].insertBefore();
    }
  }