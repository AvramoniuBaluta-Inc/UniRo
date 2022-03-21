var slider = document.getElementById("distantaUni");
var output = document.getElementById("val");
output.innerHTML = slider.value + " km"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value + " km";
};
