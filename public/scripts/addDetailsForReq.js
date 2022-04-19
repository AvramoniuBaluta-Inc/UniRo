function addDetailsForReq(universitate,universityDetails){
    //console.log(universityDetails);
    var details = document.createElement('div');
    var nume = document.createElement('p');
    nume.innerHTML = universityDetails.nume;
    var oras = document.createElement('p');
    oras.innerHTML = universityDetails.oras;
    var longitudine = document.createElement('p');
    longitudine.innerHTML = universityDetails.longitudine;
    var latitudine = document.createElement('p');
    latitudine.innerHTML = universityDetails.latitudine;
    var email = document.createElement('p');
    email.innerHTML = universityDetails.email;
    var link = document.createElement('p');
    link.innerHTML = universityDetails.link;
    var id = document.createElement('p');
    id.innerHTML = universityDetails._id;
    id.classList.add("idOfUni");
    details.appendChild(nume);
    details.appendChild(oras) ;
    details.appendChild(longitudine);
    details.appendChild(latitudine) ;
    details.appendChild(email) ;
    details.appendChild(link);
    details.appendChild(id) ;
   // console.log(details);
    details.style.display = "none";
    universitate.appendChild(details);
    universitate.insertBefore(details,universitate.children[1])

}