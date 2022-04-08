

document.querySelectorAll('[universitate]').forEach(item => {
    item.addEventListener('click', event => {
      console.log(document.getElementById("add_university").children[1][2]);
        document.getElementById("edit_university").style.display = "none";
        document.getElementById("add_university").style.display = "block";
        document.getElementById("add_university").children[1][12].value = 0;
        document.getElementById("add_university").children[1][0].value = item.children[0].children[0].children[1].children[0].children[0].children[0].innerText;
        document.getElementById("add_university").children[1][1].value = item.children[0].children[0].children[1].children[0].children[3].innerText;
        document.getElementById("add_university").children[1][2].value = item.children[1].children[0].innerText;
        document.getElementById("add_university").children[1][3].value = item.children[1].children[0].innerText;
        document.getElementById("add_university").children[1][4].value = item.children[1].children[1].innerText;
        document.getElementById("add_university").children[1][5].value = item.children[1].children[2].innerText;
        document.getElementById("add_university").children[1][6].value = item.children[1].children[3].innerText;
        document.getElementById("add_university").children[1][7].value = item.children[1].children[4].innerText;
      document.getElementById("add_university").children[1][12].value = 0;
      setTimeout(() => {
        document.getElementById("add_university").children[1][2].click();
        document.getElementById("add_university").children[1][4].click();
      }, 2000);
///mai am de lucru la asta
    });
  });