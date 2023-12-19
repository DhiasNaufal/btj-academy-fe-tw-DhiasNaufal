$(document).ready(function () {
  $("#toggleBtn").on("click", function () {
    $("#dropdownMenu").toggleClass("hidden");
  });
});
$(document).ready(function () {});
$(document).ready(function () {
  $("#toggle").change(function () {
    const isChecked = $(this).prop("checked");
    $(".dot").css(
      "transform",
      isChecked ? "translateX(100%)" : "translateX(0)"
    );
    updateDarkMode(isChecked);
  });
  let muter = 0;
  $("#logo-dhias").on("click", function () {
    muter += 360;
    console.log("diklik");
    $("#logo-dhias").css("transition", `1s`);
    $("#logo-dhias").css("transform", `rotate(${muter}deg)`);
  });

  function updateDarkMode(isDarkMode) {
    if (isDarkMode) {
      $("body").addClass("bg-black");
      $("#main-container").addClass("bg-secondary");
      $("#main-container").removeClass("bg-white");
    } else {
      $("body").removeClass("bg-black");
      $("#main-container").addClass("bg-white ");
      $("#main-container").removeClass("bg-secondary");
    }
  }

  $("#clickme").on({
    mouseenter: function () {
      $(this).append(" -u can click me if u want me disappear :(");
    },
    mouseleave: function () {
      $(this).html("&larr; Try this");
    },
    click: function () {
      $(this).html("Goodbye :(");
      $(this).fadeOut(800, function () {
        $(this).removeClass("your-class-name");
      });
    },
  });
  var isVis = true;
  $("#wisuda").hide();
  $("#opening-left").on("click", function () {
    if (isVis) {
      $("#portrait").fadeOut(400, function () {
        $("#wisuda").fadeIn(400);
      });
    } else {
      $("#wisuda").fadeOut(400, function () {
        $("#portrait").fadeIn(400);
      });
    }
    isVis = !isVis;
  });

  var isUgmVisible = true;
  $("#kmteti").hide();
  $("#education").on("click", function () {
    if (isUgmVisible) {
      $("#ugm").fadeOut(400, function () {
        $("#kmteti").fadeIn(400);
      });
    } else {
      $("#kmteti").fadeOut(400, function () {
        $("#ugm").fadeIn(400);
      });
    }
    isUgmVisible = !isUgmVisible;
  });
  // $("#education").on("click", function () {
  //   $("#ugm").fadeOut(400, function () {
  //     $("#kmteti").fadeIn(400);
  //   });
  // });
});

$("#popupContainer").css("display", "block");

$(".close").on("click", function () {
  $("#popupContainer").css("display", "none");
});
