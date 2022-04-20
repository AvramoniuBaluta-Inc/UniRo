async function renderUni() {
    var linkUniRoAPI;
    var isDashboard = (document.getElementById('isDashboard').innerText === '1');
    for(var i=1;i<lungime;i++){
        linkUniRoAPI = "/api/universitati/" + uniArray[i];
        var response = await fetch(linkUniRoAPI);
        var universityDetails = await response.json();
        var universitate = document.createElement('div');
        universitate.innerHTML = document.getElementById("dummyUni").innerHTML;
        document.getElementsByClassName("containerUni")[0].appendChild(universitate);
        document.getElementsByClassName("containerUni")[0].insertBefore(universitate,document.getElementById("dummyCircleCard"));
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("nume")[0].innerHTML = universityDetails.nume;
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("rating")[0].innerHTML = universityDetails.rating+'<i class="fa fa-star" aria-hidden="true"></i>';
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("recenzii")[0].innerHTML = "(" + universityDetails.reviewsNo + ")";
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("oras")[0].innerHTML = universityDetails.oras;
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("descriere")[0].innerHTML = universityDetails.descriere;
        if(document.getElementById("darkTheme").innerHTML ==="1"){
            document.querySelectorAll('[universitate]')[i].getElementsByClassName("more")[0].innerHTML =  '<a href="https://'+ universityDetails.link +'" target="_blank" class="btn buton-link dark-btn">Viziteaza website</a><a href="/universitati/'+ universityDetails.nume +'" class="btn buton-link detalii dash-hide dark-btn">Mai multe detalii</a>';
        }
        else{
            document.querySelectorAll('[universitate]')[i].getElementsByClassName("more")[0].innerHTML =  '<a href="https://'+ universityDetails.link +'" target="_blank" class="btn buton-link">Viziteaza website</a><a href="/universitati/'+ universityDetails.nume +'" class="btn buton-link detalii dash-hide">Mai multe detalii</a>';
        }
        if(!(universityDetails.img===undefined )){ 
            document.querySelectorAll('[universitate]')[i].getElementsByClassName("img-size")[0].innerHTML = '<img src=" data:uni.photo/' + 'data:uni.photo/image/png;base64,' + universityDetails.img + '">';
        }
        else{
            document.querySelectorAll('[universitate]')[i].getElementsByClassName("img-size")[0].innerHTML ='<img src="/images/test.png" alt="">';
        } 
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("taguri")[0].innerHTML = "";
        for(var j =0;j<universityDetails.specializari.length;j++){
            document.querySelectorAll('[universitate]')[i].getElementsByClassName("taguri")[0].innerHTML += '<span class="tag" id="tag">'+universityDetails.specializari[j]+'</span>';
        }

        document.querySelectorAll('[universitate]')[i].getElementsByClassName("dropdown-menu")[0].innerHTML = "";
        for(var j =0;j<universityDetails.materii.length;j++){
            document.querySelectorAll('[universitate]')[i].getElementsByClassName("dropdown-menu")[0].innerHTML += '<p class="materii">'+universityDetails.materii[j]+'</p>';
        }
        universitate.style.display = "block";
        verifFilter();
        if(isDashboard){
            addDetailsForReq(document.querySelectorAll('[universitate]')[i],universityDetails);
            selectUni(document.querySelectorAll('[universitate]')[i]);
        }
    } 
    document.getElementById('dummyCircleCard').style.display = "none";
};
