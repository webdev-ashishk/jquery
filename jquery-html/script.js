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

  //1] add css class method
  $("#aclassbtn").click(() => {
    // added single class here
    $("p").addClass("blue");
    // added multiple css classes in one class
    $("div").addClass("important divFontStyle");
  });

  //2] remove css class method
  $("#rclassbtn").click(() => {
    $("p").removeClass("blue");
    $("div").removeClass("important divFontStyle");
  });
  //3] toggle class method
  /* Note
  toggleclass can be used in navigation bar
  */
  $("#tclassbtn").click(() => {
    $("p").toggleClass("blue");
    $("div").toggleClass("important divFontStyle");
  });
});
