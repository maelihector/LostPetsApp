function initMap() {
  // Create a map using the 'Map' constructor.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {
      lat: 30.2672,
      lng: -97.7431
    }
  });
  // Access the Google Maps API geocoding service via the 'google.maps.Geocoder' constructor data.
  var geocoder = new google.maps.Geocoder();
  // Add event listener
  document.getElementById('submit').addEventListener('click', function () {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  // Capture the input value of address and save it in var 'address'
  var address = document.getElementById('address').value;
  // The 'geocoder.geocode()' method initiates a request to the geocoding service, 
  // passing it a GeocoderRequest data literal containing the input terms and 
  // callsback method to execute upon the receipt of the response.
  geocoder.geocode({
    'address': address
  }, function (results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
      console.log(address);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
// AJAX call for list of shelters around the address input
function getShelters() {
  var url = 'http://api.petfinder.com/shelter.find';
  var apiKey = 'c8a14c54d21aabcd8288a6f32fc6ba90';

  $.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      key: apiKey,
      'location': 78702,
      output: 'basic',
      format: 'json',
      count: 25
    },
    success: function (res) {
      console.log(res);
      var shelters = res.petfinder.shelters.shelter;
      console.log(shelters);
      shelters.forEach((value) => {
        // console.log(value.name.$t);
        // console.log(value.address1.$t);
        // console.log(value.city.$t);
        // console.log(value.state.$t);
        // console.log(value.zip.$t);
        // console.log(value.phone.$t);
        // console.log(value.email.$t);
        let name = value.name.$t;
        let address = value.address1.$t;
        let city = value.city.$t;
        let state = value.state.$t;
        let zip = value.zip.$t;
        let phone = value.phone.$t;
        let email = value.email.$t;

        let cardDiv = $("<div>").addClass("col s12 m6")
        let individualCard = ($("<div>").addClass("card blue-grey"));
        let cardContent = $("<div>").addClass("card-content white-text");
        let cardTitle = $("<span>").addClass("card-title").text(name);
        let p = $("<p>").text("Address: " + address + " " +city + " " + state + ", " + zip + " " + 
        "Phone: " + phone + " " + "Email: " + email);

        cardDiv.append(individualCard.append(cardContent.append(cardTitle).append(p)));

        $("#shelters").prepend(cardDiv);

      });
    }
  });
}
getShelters();