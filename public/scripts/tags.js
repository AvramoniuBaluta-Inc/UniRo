nr = 1;
function createInputBox_tags() {
  // alert("okk");
  nr++;
  document
    .getElementById("tags")
    .insertAdjacentHTML(
      "beforeend",
      ' <div class="container"><p>Tag ' +
        nr +
        ' </p><input type="text" name="tag' +
        nr +
        '" id=""><br></div>'
    );
}
