console.log("welcome@");

$(document).ready(function () {
  //-------------jquery CSS()------------------>

  //<------ return a css property ------->
  $("#pbtn").click(() => {
    const c = $("#para").css("color");
    alert("done" + c);
    // console.log(color);
  });
  //<------ set css property ------->

  $("#pbtn").click(() => {
    $("#para").css("color", "blue");
  });
  //<------ setMultiple css property ------->

  $("#pbtn").click(() => {
    $("#para").css({
      border: "2px solid green",
      "background-color": "black",
      "border-radius": "5px",
      "font-size": "5rem",
    });
  });

  // <----------css classes------------------>
  $("#aclassbtn").click(() => {
    $("p").addClass("blue");
  });
});
