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
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  document.getElementById("latitude").value = latitude;
  document.getElementById("longitude").value = longitude;
}

function err() {
  console.log("scuze sefu");
}
