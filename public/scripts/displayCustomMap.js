function initMap() {
  const latitudine = document.getElementById("latitude");
  const longitudine = document.getElementById("longitude");

  const lat1 = parseFloat(latitudine.value);
  const long1 = parseFloat(longitudine.value);

  const point = { lat: lat1, lng: long1 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: point,
  });

  const marker = new google.maps.Marker({
    position: point,
    map: map,
  });
}
