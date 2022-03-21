const button = document.getElementById("popUp-open-button");
var longitude;
var latitude;

button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(succes, err);
  } else {
    console.log("nu se poate boss");
  }
});

function succes(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
}

function err() {
  console.log("scuze sefu");
}
