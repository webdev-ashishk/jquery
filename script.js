console.log("Welcome@");
// syntax: $(selector).action()
// $("p").hide();
// $("h2").hide();
// $("h3").hide();
// $("h2").show();

// $("h3").show();
// $("p").show();
// $("#first").hide();
// $("#first").show();

$(document).ready(function () {
  console.log("It's awesome");
  // all jquery code write here
  $("#hdiv").click(() => {
    // $("#container").hide();
    // $("#container").fadeOut();
    $("#container").fadeOut(2000, () => {
      alert("Gone!");
    });
  });
  $("#sdiv").click(() => {
    // $("#container").show();
    $("#container").fadeIn();
  });
  $("#ftoggle").click(() => {
    // $("#container").show();
    $("#container").fadeToggle();
  });
  $("#fadeTo").click(() => {
    // $("#container").show();
    // fadeTo(speed, opacity, callbackFunction(optional));
    $("#container").fadeTo(500, 0.5);
  });

  //--------------- slide function------------------------------>
  /* slideup,slideDown,slideToggle 
   Note
   1. both function are taking three parameters (speed,callbackfunction)
   2.Both parameter's are optional
  */
  // slide up
  $("#sup").click(() => {
    // $("#container").slideUp();
    $("#container").slideUp(3000, () => {
      alert("slideUp");
    });
  });
  // slideDown
  $("#sdown").click(() => {
    // $("#container").slideDown();
    $("#container").slideDown(3000);
    // $("#container").slideDown(3000, () => {
    //   alert("slideDown");
    // });
  });
  //slide toggle
  $("#stoggle").click(() => {
    $("#container").slideToggle(1000);
  });
});
