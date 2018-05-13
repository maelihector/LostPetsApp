function initMap() {
  // Create a map using the 'Map' constructor.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 30.2672, lng: -97.7431}
  });
  // Access the Google Maps API geocoding service via the 'google.maps.Geocoder' constructor object.
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  // The 'geocoder.geocode()' method initiates a request to the geocoding service, passing it a GeocoderRequest object literal containing the input terms and callsback method to execute upon the receipt of the response.
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}