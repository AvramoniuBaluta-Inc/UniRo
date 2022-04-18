async function renderUni() {
    var linkUniRoAPI;
    for(var i=1;i<lungime;i++){
        linkUniRoAPI = "/api/universitati/" + uniArray[i];
        var response = await fetch(linkUniRoAPI);
        var universityDetails = await response.json();
        var universitate = document.createElement('div');
        universitate.innerHTML = document.getElementById("dummyUni").innerHTML;
        document.getElementsByClassName("container1")[0].appendChild(universitate);
        document.getElementsByClassName("container1")[0].insertBefore(universitate,document.getElementById("dummyCircleCard"));
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("nume")[0].innerHTML = universityDetails.nume;
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("rating")[0].innerHTML = universityDetails.rating+'<i class="fa fa-star" aria-hidden="true"></i>';
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("recenzii")[0].innerHTML = "(" + universityDetails.reviewsNo + ")";
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("oras")[0].innerHTML = universityDetails.oras;
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("descriere")[0].innerHTML = universityDetails.descriere;
        document.querySelectorAll('[universitate]')[i].getElementsByClassName("more")[0].innerHTML =  '<a href="https://'+ universityDetails.link +'" target="_blank" class="btn buton-link">Viziteaza website</a><a href="/universitati/'+ universityDetails.nume +'" class="btn buton-link detalii dash-hide">Mai multe detalii</a>';
        if(!(universityDetails.img===undefined )){ 
            document.querySelectorAll('[universitate]')[i].getElementsByClassName("img-size")[0].innerHTML = '<img src=" data:uni.photo/' + 'data:uni.photo/image/png;base64,' + universityDetails.img + '">';
        }
        else{
            document.querySelectorAll('[universitate]')[i].getElementsByClassName("img-size")[0].innerHTML ='<img src="/images/test.png" alt="">';
        } 

    } 
};
