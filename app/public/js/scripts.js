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

    success: data => {
      console.log(data.zip);
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

function sucessModalOpen() {
  var elem = document.querySelector('.modalSucess');
  var postSuccessModal = M.Modal.init(elem);


}
// sucessModalOpen();

function errorModalOpen() {
  var elem = document.querySelector('.modalError');
  var postErrorModal = M.Modal.init(elem);

  postErrorModal.close();

}
// errorModalOpen();

// Delete post function
$("#deleteId").click(function () {
  $.get("/api/all").then(function (data) {
    inputEmail = $("#emailInput").val().trim();
    inputPassword = $("#passwordInput").val().trim();
    for (var i = 0; i < data.length; i++) {
      var email = data[i].email;
      var password = data[i].password;
      var id = data[i].id;
      // Make sure the inputEmail and db email && inputPassword and db password match before we delete a post
      if (email === inputEmail && password === inputPassword) {
        $.ajax({
            method: "DELETE",
            url: "/api/pets/" + id
          })
          .then(
            $("#deleteInput").val(''),
            $("#emailInput").val(''),
            $("#passwordInput").val('')
          )
        sucessModalOpen();
      } else {
        errorModalOpen();
      }
      // event.preventDefault();
      // console.log($("#password").val().trim())
      // console.log($("#email").val().trim())
      // $.ajax({
      //   type: "POST",
      //   url: "/api/delete",
      //   data: {
      //     email: $("#email").val().trim(),
      //     password: $("#password").val().trim()
      //   },
      //   success: data => {
      //     // Empty input values after submit
      //     $(".deleteId").val(''),
      //     $("#email").val(''),
      //     $("#password").val(''),
      //     $("#textarea1").val('')

    }
  });
});

function searchLostPets() {
  window.location = "../lost.html";

};

function searchFoundPets() {
  window.location = "../found.html";
};