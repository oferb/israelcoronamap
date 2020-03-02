var map, infoWindow;
function init() {
  fetch('/json/data.json')
    .then((response) => {
      return response.json();
    })
    .then((govData) => {
      // const userData = getUserData();
      const userData = [
        {
          lat: 32.072810,
          lon: 34.828020,
          timestamp: Date.now()
        }
      ]
      console.log('userData:', userData);
      const exposurePosition = checkExposure(userData, govData);
      console.log('exposurePosition:', exposurePosition);
    });
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 15
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('מיקום נוכחי');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function navigate(lat, lng) {
  var center = new google.maps.LatLng(lat, lng);
  map.panTo(center);
}

function saveUserData(data) {
  localStorage.setItem('user_data', JSON.stringify(data));
}

function getUserData() {
  return JSON.parse(localStorage.getItem('user_data'));
}

function savePosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        timestamp: Date.now()
      };

      let userData = getUserData();
      if (!userData) {
        userData = [];
      }
      userData.push(pos);
      console.log("Position count: ", userData.length);

      saveUserData(userData);

    }, function () {
      alert("Position error");
    });
  } else {
    // Browser doesn't support Geolocation
    alert("Position error");
  }
}


function checkExposure(userData, govData) {
  for (let i = 0; i < userData.length; i++) {
    for (let j = 0; j < govData.length; j++) {
      console.log('XX getTimestamp(govData[j].start_time)', getTimestamp(govData[j].start_time));
      console.log('XX getTimestamp(govData[j].end_time)', getTimestamp(govData[j].end_time));
      console.log('XX userData[i].timestamp:', userData[i].timestamp);
      if (userData[i].timestamp >= getTimestamp(govData[j].start_time) && userData[i].timestamp <= getTimestamp(govData[j].end_time)) {
        // TODO: Correct lat, lon to meters for comparing to radius.
         console.log('getDistance(userData[i], govData[j]):', getDistance(userData[i], govData[j]));
         console.log('govData.radius:', govData[j].radius);
        if (getDistance(userData[i], govData[j]) <= govData[j].radius) {
          return govData[j];
        }
      }
    }
  }
  return null;
}


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.lat - p1.lat, 2) + Math.pow(p2.lon - p1.lon, 2));
}

function getTimestamp(stringTime) {
  return new Date(stringTime).getTime();
} 

init();