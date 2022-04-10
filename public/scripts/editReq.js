document.querySelectorAll('[req]').forEach(item => {
    item.addEventListener('click', event => {
        console.log("lolll");
        document.getElementById("req_to_add_university").style.display = "none";
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
        document.getElementById("add_university").children[1][12].value = 1;
        addMaterii(item);
        addSpecializari(item);
        var images = item.getElementsByClassName("img-size");
        var image = document.createElement('div');
        image.setAttribute('class', "edit_photo");
        image.innerHTML = images[0].innerHTML;
        console.log(image);
        var photo = document.getElementById("add_university").getElementsByTagName('img');
        if(photo[0]!=undefined)
            photo[0].remove();
        document.getElementById("add_university").children[1].appendChild(image);
        document.getElementById("add_university").children[1].insertBefore(image,document.getElementById("add_university").children[1].children[4]);
        
    });
  });