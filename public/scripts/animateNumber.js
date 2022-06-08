var currentValue1 = document.getElementById("value1").innerHTML;
var currentValue2 = document.getElementById("value2").innerHTML;
var currentValue3 = document.getElementById("value3").innerHTML;

function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue("value1", 0, currentValue1, 1000);
animateValue("value2", 0, 100, 1000);
animateValue("value3", 0, 100, 1000);
