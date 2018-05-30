$(document).ready(function () {

  // Reference to the petDiv
  let petList = $(".petList");

  // Function to create pet cards
  function createPetCard(value) {
    let img = value.img;
    let zip = value.zip;
    let comment = value.comment;
    let animal;

    if (value.animal === "cat"){
      animal = "../assets/images/catlogo.png";
    } else if (value.animal === "dog"){
      animal = "../assets/images/dogico2.png";
    } else {
      animal = "../assets/images/questionMark.png";
    }
    // Grab whether pet is listed as lost or found
    let status;
    if (value.lost) {
      status = "Lost";
    } else {
      status = "Found";
    }
    // Grab 'createAt' value and save it to a var: 'jsonDate' 
    let jsonDate = value.createdAt;
    // convert or jsonDate to UTCString
    let utcDate = new Date(jsonDate).toUTCString();
    // Grab dates and save them to recognizable vars
    let day = utcDate.slice(4, 7);
    let month = utcDate.slice(8, 11);
    let year = utcDate.slice(12, 17);
    let date = month + day + ", " + year;

    // Create Card for each pet returned
    let cardDiv = $("<div>").addClass("col s12 m6 l4").attr("id", "dumpedCard")
    let card = $("<div>").addClass("card")
      .append(
        $("<div>").addClass("card-image")
        .append($("<img>").attr("src", img))
        .append($("<div>").addClass("col s4").append($("<img>").addClass("circle responsive-img").attr("style", "border-radius: 0;").attr("src", animal)))
        .append($("<span>").addClass("card-title").text("Posted: " + date))
      )
      .append(
        $("<div>").addClass("card-content").attr("style", "height: 210px")
        .append($("<span>").addClass("card-title").text(status + " in zipcode: " + zip))
        .append($("<p>").text(" " + comment))
      )
      .append(
        $("<div>").addClass("card-action").attr("style", "background-color:#4fafa252;")
        .append(
          $("<a>").addClass("btn tooltipped waves-effect waves-light").attr("data-position", "top").attr("data-tooltip", "Email post owner").attr("href", "#").attr("type", "submit").attr("style", "color:#158c83b5;")
          .append($("<i>").addClass("material-icons right").text("send"))
        )
        .append(
          $("<a>").addClass("btn tooltipped waves-effect waves-light").attr("data-position", "top").attr("style", "float: right; color:#158c83b5;").attr("data-tooltip", "Delete post!").attr("href", "../delete.html").attr("type", "submit")
          .append($("<i>").addClass("material-icons right").text("delete"))
        )
      );
    cardDiv.append(card);
    // Dump the card with the data on the page to div with id='pets' 
    $("#pets").prepend(cardDiv);
  }

  // Function to return all pets in our database
  function getPets() {
    $.get("/api/pets", function (data) {
      var petCards = [];
      // for every pet returned create a card
      for (var i = 0; i < data.length; i++) {
        petCards.push(createPetCard(data[i]));
      }
    });
  }

  // If the user clicks on the filter radio button 'lost' 
  function getLostPets() {
    $.get("/api/lost", function (data) {
      var lostPetCards = [];
      for (var i = 0; i < data.length; i++) {
        lostPetCards.push(createPetCard(data[i]));
      }
    });
  }

  // If the user clicks on the filter radio button 'found' 
  function getFoundPets() {
    $.get("/api/found", function (data) {
      var foundPetCards = [];
      for (var i = 0; i < data.length; i++) {
        foundPetCards.push(createPetCard(data[i]));
      }
    });
  }

  // If the user clicks on the 'reset' button, refresh the page
  $("#resetFilters").on("click", function () {
    window.location = "../pets.html";
  });

  $("#lost").on("click", function () {

    console.log($('input[name=status]:checked').val());
    console.log($('input[name=petOrder]:checked').val());
    console.log($('#petType').val());
    console.log($('#zipcode').val());

    // Empty petDIV first
    petList.children().remove();
    getLostPets();
  });

  $("#found").on("click", function () {

    console.log($('input[name=status]:checked').val());
    console.log($('input[name=petOrder]:checked').val());
    console.log($('#petType').val());
    console.log($('#zipcode').val());
 
    // Empty petDIV first
    petList.children().remove();
    getFoundPets();
  });
  getPets();

  // Get a list of every card dumped on the html when user clicks on filter radio option
  // Although right now I have to .petList, I wanted to know how I can grab the list on the DOM to loop through and return based on radio option
  $(document).on('click', ".petList", function (e) {

    console.log("A card was clicked on");

    //console.log(this);
   // console.log(this.textContent);

    // Split the string into single card info
    let cardInfoString = this.textContent;
    let seperateCard = 'Posted: '
    splitString(cardInfoString, seperateCard);

    function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);

      // console.log('The original string is: "' + stringToSplit + '"');
      // console.log('The separator is: "' + separator + '"');
      // console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings);

      arrayOfStrings.forEach(element => {
        console.log(element);
        cardDate = element.slice(0, 12),
        petStatus = element.slice(13, 18),
        petZipCode = element.slice(30, 36)
        console.log(cardDate);
        console.log(petStatus);
        console.log(petZipCode);

      });
    }

  });

});




$(document).ready(function () {
  $('.sidenav').sidenav();
  $('select').formSelect();
  $('.tooltipped').tooltip();
});