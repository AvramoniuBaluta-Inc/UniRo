function initMap() {
  const latitudine = document.getElementById("latitude");
  const longitudine = document.getElementById("longitude");
  const point = { lat: 44.43861789060006, lng: 26.049495182208684 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: point,
  });

  const marker = new google.maps.Marker({
    position: point,
    map: map,
  });
}
