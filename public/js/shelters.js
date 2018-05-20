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
      console.log(res);
      var shelters = res.petfinder.shelters.shelter;
      console.log(shelters);
      shelters.forEach((value) => {
        
        // Take returned data and save it to vars
        let name = value.name.$t;
        let address;

        if( value.address1.$t ){
          address = value.address1.$t;
        }
        else{
          address = "N/A";          
        }

        let city = value.city.$t;
        let state = value.state.$t;
        let zip = value.zip.$t;
        let phone;
        
        if( value.phone.$t ){
          phone = value.phone.$t;
        }
        else{
          phone = "N/A";          
        }
        let email = value.email.$t;
        
        // Create Card for each shelter listing 
        let cardDiv = $("<div>").addClass("col s12 m6")
        let individualCard = ($("<div>").addClass("card blue-grey"));
        let cardContent = $("<div>").addClass("card-content white-text");
        let cardTitle = $("<span>").addClass("card-title").text(name);
        let p1 = $("<p>").text("Address:  " + address + " " +city + " " + state + ", " + zip);
        let p2 = $("<p>").text("Phone:  " + phone + " ");
        let p3 = $("<p>").text("Email:  " + email);
        // Dump the card with the data onto the html
        cardDiv.append(individualCard.append(cardContent.append(cardTitle).append(p1).append(p2).append(p3)));
        // Prepend to 'shelters' id DIV
        $("#shelters").prepend(cardDiv);

      });
    }
  });
}
$("#submit").on("click", getShelters); 