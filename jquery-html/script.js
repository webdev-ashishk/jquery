console.log("welcome@");

$(document).ready(function () {
  //-------------jquery CSS()------------------>

  $("#pbtn").click(() => {
    const c = $("#para").css("color");
    alert("done" + c);
    // console.log(color);
  });
});
