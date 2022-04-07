document.querySelectorAll('[universitate]').forEach(item => {
    item.addEventListener('click', event => {
        document.getElementById("edit_university").style.display = "none";
        document.getElementById("add_university").style.display = "block";
      //  document.getElementById("add_university").children[1].children[12].value = 0;
    //    document.getElementById("add_university").children[1].children[0].value = 0;
    //    document.getElementById("add_university").children[1].children[1].value = 0;
      //  document.getElementById("add_university").children[1].children[2].value = 0;
      //  document.getElementById("add_university").children[1].children[3].value = 0;
       // document.getElementById("add_university").children[1].children[4].value = 0;
      //  document.getElementById("add_university").children[1].children[5].value = 0;
      //  document.getElementById("add_university").children[1].children[6].value = 0;
      //  document.getElementById("add_university").children[1].children[7].value = 0;
                // item.getElementById('toAdd').value = 0;
    });
  });