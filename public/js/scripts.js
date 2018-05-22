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
      img: $("#imgInput").val().trim()
    },
    success: data => {
      if (isLost === true) {
        searchLostPets();
      } else {
        searchFoundPets();
      }
    }
  })
});

// This triggers deletion of a database record with the matching id 
$("#deleteId").click(function () {
  event.preventDefault();
  $.ajax({
    type: "POST",
    url: "/api/delete",
    data: {
      id: $(".deleteId").val().trim()
    },
    success: data => {
      console.log(data);
    }
  });
});

function searchLostPets() {
  window.location = "../lost.html";

};

function searchFoundPets() {
  window.location = "../found.html";
};