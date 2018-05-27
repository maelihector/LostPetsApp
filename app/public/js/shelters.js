// AJAX call for list of shelters around the address input
function getShelters() {
  var url = 'http://api.petfinder.com/shelter.find';
  var apiKey = 'c8a14c54d21aabcd8288a6f32fc6ba90';
  var zip = $("#zipcode").val();
  $.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      key: apiKey,
      'location': zip,
      output: 'basic',
      format: 'json',
      count: 25
    },
    success: function (res) {
      var shelters = res.petfinder.shelters.shelter;
      shelters.forEach((value) => {
        // Take returned data and save it to vars
        let name = value.name.$t;
        let address;

        if (value.address1.$t) {
          address = value.address1.$t;
        } else {
          address = "N/A";
        }

        let city = value.city.$t;
        let state = value.state.$t;
        let zip = value.zip.$t;
        let phone;

        if (value.phone.$t) {
          phone = value.phone.$t;
        } else {
          phone = "N/A";
        }
        let email = value.email.$t;

        // Create Card for each shelter listing 
        let cardDiv = $("<div>").addClass("col s12")
        let card = $("<div>").addClass("card teal darken-2");
        let cardContent = $("<div>").addClass("card-content white-text")
          .append($("<span>").addClass("card-title").text(name))
          .append($("<p>").text("Address:  " + address + " " + city + " " + state + ", " + zip))
          .append($("<p>").text("Phone:  " + phone))
          .append($("<p>").text("Email:  " + email));

        // Dump the card with the data onto the html
        cardDiv.append(
          card.append(
            cardContent
          )
        );

        // Prepend to 'shelters' id DIV
        $("#shelters").prepend(cardDiv);
      });
    }
  });
}
$("#submit").on("click", getShelters);