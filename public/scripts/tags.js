nr = 1;
function createInputBox_tags() {
  // alert("okk");
  nr++;
  document
    .getElementById("tags")
    .insertAdjacentHTML(
      "beforeend",
      "Tag " +
        nr +
        ' <input type="text" name="tag' +
        nr +
        '" id=""> <br> </div>'
    );
}
