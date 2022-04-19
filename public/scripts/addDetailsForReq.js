function addDetailsForReq(universitate,universityDetails){
    var details = '';
    details +=  '<p>' + universityDetails.nume + '</p>';
    details +=  '<p>' + universityDetails.oras + '</p>';
    details +=  '<p>' + universityDetails.longitudine + '</p>';
    details +=  '<p>' + universityDetails.latitudine + '</p>';
    details +=  '<p>' + universityDetails.email + '</p>';
    details +=  '<p>' + universityDetails.link + '</p>';
    details +=  '<p class="idOfUni">' + universityDetails._id + '</p>';
    universitate.innerHTML += '<div style="display:none">' + details + '</div>';
}