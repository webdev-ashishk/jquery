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

  // <-------------Animate--------------------->
  /* Note
  +=value This will increase relatively
  */
  $("#animate").click(() => {
    //   $("#container").animate({ width: "+=300px", height: "300px" }, 300, () => {
    //     alert("width changed !");
    //   });
    // });
    const reverse = () => {
      $("#container").animate({
        width: "100px",
        height: "100px",
        left: "250px",
        // opacity: "0.5",
        borderRadius: "10px",
        fontSize: "1.4rem",
        color: "red",
      });
    };
    $("#container").animate(
      {
        width: "200px",
        height: "200px",
        left: "0",
        // opacity: "0.5",
        borderRadius: "10px",
        fontSize: "2rem",
        color: "red",
      },
      500,
      reverse
    );
  });
  //////////////////////////////////////

  $("#btn9").click(() => {
    /* NOTE
    Val() function can do two things 
    1.get the value's only in input field
    2.set the value's only in input field
    */
    const result = $("#ifield").val();
    // console.log(result);
    // $("#ifield").val("this will be done using well function");
  });

  // <------------changing image src--------------------->
  $("#ibtn").click(() => {
    $("#imgOne").attr("src", "me2.jpeg");
  });
});
