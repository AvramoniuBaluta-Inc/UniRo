nr = 1;
function createInputBox_tags() {
  // alert("okk");
  nr++;
  document
    .getElementById("tags")
    .insertAdjacentHTML(
      "beforeend",
      ' <div ><span>Tag ' +
        nr +
        ' </span><input class="form-control" type="text" name="tag' +
        nr +
        '" id=""></div>'
    );
}
