//Change statusInput value to boolean
let isLost;

function lostBoolean() {
  var switchState = ($("#statusInput").is(":checked")) ? "ON" : "OFF"
  if (switchState === 'ON') {
    return isLost = false
  } else {
    return isLost = true
  }

};

//Post new lost or found pet
$("#submitBtn").on("click", function () {
  event.preventDefault();
  lostBoolean();
  $.ajax({
    type: "POST",
    url: "/api/pets",
    data: {
      zip: $("#zipInput").val().trim(),
      lost: isLost,
      animal: $("#animalInput").val().trim(),
      color: $("#colorInput").val().trim(),
      size: $("#sizeInput").val().trim(),
      comment: $("#commentInput").val().trim(),
      email: $("#emailInput").val().trim(),
      password: $("#passwordInput").val().trim(),
      img: $("#imgInput").val().trim()
    },
    // Commented out since after form submit the modal will pop up telling them 
    // that their post was added + other info. The 'see updated list' will send them to 
    // pets.html and that list will be in arder with newest first (hopefully).

    success: data => {
      // if (isLost === true) {
      //   searchLostPets();
      // } else {
      //   searchFoundPets();
      // }

      // Empty input form after submit
      $("#zipInput").val(''),
      $("#animalInput").val(''),
      $("#colorInput").val(''),
      $("#sizeInput").val(''),
      $("#commentInput").val(''),
      $("#emailInput").val(''),
      $("#imgInput").val('')
    }
  });
});

// This triggers deletion of a database record with the matching id 
$("#deleteId").click(function () {
  event.preventDefault();
  console.log($("#password").val().trim())
  console.log($("#email").val().trim())
  $.ajax({
    type: "POST",
    url: "/api/delete",
    data: {
      email: $("#email").val().trim(),
      password: $("#password").val().trim()
    },
    success: data => {
      // Empty input values after submit
      $(".deleteId").val(''),
      $("#email").val(''),
      $("#password").val(''),
      $("#textarea1").val('')
    }
  });
});

function searchLostPets() {
  window.location = "../lost.html";

};

function searchFoundPets() {
  window.location = "../found.html";
};