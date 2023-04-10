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
});
