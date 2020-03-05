var map, infoWindow, govData;
const windowWidth = window.screen.availWidth;
let globalGovData = []
let markersArray = [];
function init() {
  fetch('/json/data.json')
    .then((response) => {
      return response.json();
    })
    .then((govData) => {
      const userData = getUserData();
      const mockData = [
        {
          lat: 32.072810,
          lon: 34.828020,
          timestamp: Date.now()
        }
      ]
      globalGovData = govData;
      const exposurePosition = checkExposure(userData, mockData);
      if (exposurePosition) {
        alert("You have been near a person with Coronavirus: " + JSON.stringify(exposurePosition));
      }
    });

  getGovData();
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 32.072958, lng: 34.969073 },
    zoom: windowWidth >= 500 ? 12 : 9,
    gestureHandling: "greedy"
  });
  let infoWindow = new google.maps.InfoWindow;
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   var pos = {
    ///     lat: position.coords.latitude,
    //     lng: position.coords.longitude
    //   };

      // let marker = new google.maps.Marker({
      //   position: { lat: 31.787545, lng: 35.174675 },
      //   map: map,
      //   // icon: {
      //   //   // url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      //   // }
      // });

      // infoWindow.setPosition(pos);
      // infoWindow.setContent('<div class="user-location-box">מיקומך הנוכחי</div>');
      // infoWindow.open(map, marker);
  

    // }, function () {
    //   handleLocationError(true, infoWindow, map.getCenter());
    // });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  init();
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
      if (userData[i].timestamp >= getTimestamp(govData[j].start_time) && userData[i].timestamp <= getTimestamp(govData[j].end_time)) {
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

function getParam(name) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name)
}

function clearMarkers() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}

function updateMap() {
  clearMarkers();
  const daysAgo = parseInt(getParam('daysAgo'));
  var daysAgoDate = new Date();
  daysAgoDate.setDate(daysAgoDate.getDate() - daysAgo);
  for (let j = 0; j < govData.length; j++) {
    if (getTimestamp(govData[j].t_end) < daysAgoDate) {
      continue;
    }
    let pos = {
      lat: govData[j].position[1],
      lng: govData[j].position[0]
    };
    let marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: {
        url: "https://firebasestorage.googleapis.com/v0/b/coronavirus-il.appspot.com/o/red%20circle.svg?alt=media&token=1a0a9493-ad97-4231-829a-c5c71b092c56"
      }
    });
    markersArray.push(marker);
  }
}

function setDaysAgo(daysAgo) {
  window.history.pushState("Corona map", "Corona map", "/?daysAgo=" + daysAgo);
  updateMap();
}

function getGovData() {
  fetch('/json/data2.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      govData = data;
      updateMap();
    })
}
