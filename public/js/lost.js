  // Make a get request to our api route that will return every lost pet
  $.get("/api/lost", function (data) {
    console.log(data);

    // Grab certain values of each pet that our server sends us back
    data.forEach(value => {
      let img = value.img;
      let zip = value.zip;
      let comment = value.comment;
      let type = value.animal;
      let email = value.email;

      // Convert numMonth (dates in #s) to textMonth (months in text)
      // Grab createAt value and save it a var
      let date = value.createdAt;
      // Grab appropiate idexes of the 'date' string
      let day = date[8] + date[9];
      let year = date[0] + date[1] + date[2] + date[3];
      let numMonth = date[5] + date[6];
      // Create an empty var for textMonth to give it correct month value
      let textMonth;
      if (numMonth === "01") {
        textMonth = "January";
      } else if (numMonth === "02") {
        textMonth = "February";
      } else if (numMonth === "03") {
        textMonth = "March";
      } else if (numMonth === "04") {
        textMonth = "April";
      } else if (numMonth === "05") {
        textMonth = "May";
      } else if (numMonth === "06") {
        textMonth = "June";
      } else if (numMonth === "07") {
        textMonth = "July";
      } else if (numMonth === "08") {
        textMonth = "August";
      } else if (numMonth === "09") {
        textMonth = "September";
      } else if (numMonth === "10") {
        textMonth = "October";
      } else if (numMonth === "11") {
        textMonth = "November";
      } else {
        textMonth = "December";
      }

      // Create Card for each lost pet
      let cardDiv = $("<div>").addClass("col s12 m6 l4");
      let card = $("<div>").addClass("card")
        .append(
          $("<div>").addClass("card-image")
          .append($("<img>").attr("src", img))
          .append($("<span>").addClass("card-title").text("Posted: " + textMonth + " " + day + ", " + year))
        )
        .append(
          $("<div>").addClass("card-content").attr("style", "height: 160px")
          .append($("<span>").addClass("card-title").text("Lost in zipcode: " + zip))
          .append($("<p>").text(comment))
        )
        .append(
          $("<div>").addClass("card-action")
          // In the '#', enter link that will open an email form to send out keeping email private? like craiglist...
          .append($("<a>").attr("href", "#").text("Email post owner."))
        );

      // Dump the card with the data onto the html
      cardDiv.append(card)

      // Append to id='pets' 
      $("#pets").append(cardDiv);
    });
  });

  // Triggers the sideNav when on smFound screens
  $(document).ready(function () {
    $('.sidenav').sidenav();
  });