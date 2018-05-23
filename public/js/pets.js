$(document).ready(function () {

  // Reference to the petDiv
  let petList = $(".petList");

  function createPetCard(value) {
    let img = value.img;
    let zip = value.zip;
    let comment = value.comment;
    // Grab whether pet is lost or not
    let status;
    if (value.lost) {
      status = "Lost";
    } else {
      status = "Found";
    }
    // Parse our jsonDate 
    // Grab createAt value and save it to a var
    let jsonDate = value.createdAt;
    let utcDate = new Date(jsonDate).toUTCString();
    let day = utcDate.slice(4, 8);
    let month = utcDate.slice(8, 11);
    let year = utcDate.slice(12, 17);
    let date = month + day + ", " + year;

    // Create Card for each found pet
    let cardDiv = $("<div>").addClass("col s12 m6 l4");
    let card = $("<div>").addClass("card")
      .append(
        $("<div>").addClass("card-image")
        .append($("<img>").attr("src", img))
        .append($("<span>").addClass("card-title").text("Posted: " + date))
      )
      .append(
        $("<div>").addClass("card-content").attr("style", "height: 210px")
        .append($("<span>").addClass("card-title").text(status + " in zipcode: " + zip))
        .append($("<p>").text(comment))
      )
      .append(
        $("<div>").addClass("card-action").attr("style", "background-color:#4fafa252;")
        // In the '#', enter link that will open an email form to send out keeping email private? like craiglist...
        .append(
          $("<a>").addClass("btn tooltipped waves-effect waves-light").attr("data-position", "top").attr("data-tooltip", "Email post owner").attr("href", "#").attr("type", "submit").attr("style", "color:#158c83b5;")
          .append($("<i>").addClass("material-icons right").text("send"))
        )

        .append(
          $("<a>").addClass("btn tooltipped waves-effect waves-light").attr("data-position", "top").attr("style", "float: right; color:#158c83b5;").attr("data-tooltip", "Delete post!").attr("href", "../delete.html").attr("type", "submit")
          .append($("<i>").addClass("material-icons right").text("delete"))
        )
      );
    // Dump the card with the data onto the html
    cardDiv.append(card);
    // Append to id='pets' 
    $("#pets").prepend(cardDiv);
  }

  function getPets() {
    $.get("/api/all", function (data) {
      var petCards = [];
      for (var i = 0; i < data.length; i++) {
        petCards.push(createPetCard(data[i]));
        console.log(data[i]);
      }
    });
  }

  // If the user clicks on the filter radio button 'lost' send them to lost.html
  function getLostPets() {
    $.get("/api/all", function (data) {
      var lostPetCards = [];
      for (var i = 0; i < data.length; i++) {
        var isLost = data[i].lost;
        if (isLost === true) {
          lostPetCards.push(createPetCard(data[i]));
        }
      }
    });
  }

  // If the user clicks on the filter radio button 'found' send them to found.html
  function getFoundPets() {
    $.get("/api/all", function (data) {
      var lostPetCards = [];
      for (var i = 0; i < data.length; i++) {
        var isLost = data[i].lost;
        if (isLost === false) {
          lostPetCards.push(createPetCard(data[i]));
        }
      }
    });
  }
  // If the user clicks on the 'reset' button, refresh the page
  $("#resetFilters").on("click", function () {
    // Empty petDIV first
    petList.children().remove();
    getPets();
  });
  $("#lost").on("click", function () {
    // Empty petDIV first
    petList.children().remove();
    getLostPets();
  });
  $("#found").on("click", function () {
    // Empty petDIV first
    petList.children().remove();
    getFoundPets();
  });
  getPets();
});

$(document).ready(function () {
  $('.sidenav').sidenav();
  $('select').formSelect();
  $('.tooltipped').tooltip();
});

//  // If the user clicks on the filter radio button 'asc'
//  $("#asc").on("click", function () {

//  });

//  // If the user clicks on the filter radio button 'desc'
//  $("#desc").on("click", function () {

//  });