$(document).ready(function () {
  $("#toggleBtn").on("click", function () {
    $("#dropdownMenu").toggleClass("hidden");
  });
});
$(document).ready(function () {
  $("#toggle").change(function () {
    const isChecked = $(this).prop("checked");
    $(".dot").css(
      "transform",
      isChecked ? "translateX(100%)" : "translateX(0)"
    );
  });
});

$(document).ready(function () {
  let muter = 0;
  $("#logo-kiri").on("click", function () {
    muter += 360;
    console.log("diklik");
    $("#logo-kiri").css("transition", `1s`);
    $("#logo-kiri").css("transform", `rotate(${muter}deg)`);
  });

  $(".warning").css("display", "none");
  $("#password").keyup(function (event) {
    if (event.originalEvent.getModifierState("CapsLock")) {
      $(".warning").css("display", "block");
    } else {
      $(".warning").css("display", "none");
    }
  });

  $("#username").keyup(function () {
    $("#errorNama").text("");
    $("#errorForm").text("");
  });

  $("#password").keyup(function () {
    let password = $("#password").val();
    errors = [];
    if (password.length < 4) {
      errors.push("4 characters");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("1 lowercase character");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("1 uppercase character");
    }

    if (!/[0-9]/.test(password)) {
      errors.push("1 number character");
    }
    TotalErrors = errors.join(", ");
    if (errors.length !== 0) {
      $("#errorPassword").text(`Your password must be at least ${TotalErrors}`);
    } else {
      $("#errorPassword").text("");
      // Note ini kalo pake .hide harus ada .show lagi..
    }
  });
});

// Memvalidasi Form
function validateForm(e) {
  e.preventDefault();
  var username = $("#username").val();
  var password = $("#password").val();

  if (username.trim() === "") {
    $("#errorNama").text("Nama tidak boleh kosong");
  } else {
    $("#errorNama").text("");
  }
  if (password === "") {
    $("#errorPassword").text("Password tidak boleh kosong");
  }
  if ($("#errorNama").text() === "" && $("#errorPassword").text() === "") {
    login();
  }
}

// Memunculkan dan menyembunyikan password
$("#showPassword").change(function () {
  $("#password").prop("type", $(this).prop("checked") ? "text" : "password");
});

function login() {
  let username = $("#username").val();
  let password = $("#password").val();

  $.ajax({
    url: "https://dummyjson.com/auth/login",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      username: username,
      password: password,
    }),
    statusCode: {
      200: function () {
        window.location.href = "about.html";
        console.log("masuk");
      },
    },
    error: function (error) {
      $("#errorForm").text("Alamat Email dan Password Salah");
      alert("Email dan Password Salah");
      console.error("Error:", error);
    },
  });
}
