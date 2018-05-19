//Change statusInput value to boolean
  function lostBoolean() {
    var switchState = ($("#statusInput").is(":checked"))? "ON" : "OFF"
    if (switchState === 'ON') {
      return false;
    } else
    {
      return true
    } 
  };


//Post new lost or found pet
$("#submitBtn").on("click", function(){
  event.preventDefault();
  $.ajax({
    type: "POST",
    url: "/api/pets",
    data: {
      zip: $("#zipInput").val().trim(),
      lost: lostBoolean(),
      animal: $("#animalInput").val().trim(),
      color: $("#colorInput").val().trim(),
      size: $("#sizeInput").val().trim(),
      comment: $("#commentInput").val().trim(),
      email: $("#emailInput").val().trim()
    },
    success: data => location.reload()
  })
});

function searchLostPets(data) {

};

function searchFoundPets(data) {

};

