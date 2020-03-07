var map, infoWindow, govData;
const windowWidth = window.screen.availWidth;
let markersArray = [];

function init() {
  getButtonElements();
  getGovData();
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 32.072958, lng: 34.969073 },
    zoom: windowWidth >= 500 ? 12 : 9,
    gestureHandling: "greedy"
  });
  infoWindow = new google.maps.InfoWindow;
  map.addListener('mousedown', function () {
    if (infoWindow) {
      infoWindow.close();
    }
  });
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
  for (var i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}

function updateMap() {
  clearMarkers();
  let daysAgo = parseInt(getParam('daysAgo'));
  if (isNaN(daysAgo)) {
    daysAgo = 14;
  }
  var daysAgoDate = new Date();
  daysAgoDate.setDate(daysAgoDate.getDate() - daysAgo);
  contantCelArr = []
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
        url: "https://firebasestorage.googleapis.com/v0/b/coronavirus-il.appspot.com/o/blue%20circle%20pin.svg?alt=media&token=a6d80cd5-acf4-4748-b581-871ab4763413",
        scaledSize: new google.maps.Size(20, 20)
      }
    });
    var contentStringCal = `<div class="infowindow"> 
                              <div class="info-label">${govData[j].label}</div>
                              <div class="info-description">${govData[j].description}</div>
                            </div>`;
    contantCelArr[j] = contentStringCal;

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infoWindow.setContent(contantCelArr[i]);
        infoWindow.open(map, marker);
      }
    })(marker, j));
    // google.maps.event.addListener(marker, 'mouseout', function () {
    //   infoWindow.close();
    // });

    // google.maps.event.addListener(marker, 'mousedown', function () {
    //   infoWindow.setContent(contentStringCal);
    //   infoWindow.open(map, marker);
    // });

    // google.maps.event.addListener(marker, 'mouseover', function () {
    //   infoWindow.setContent(contentStringCal);
    //   infoWindow.open(map, marker);
    // });
    markersArray.push(marker);
  }
}

function setDaysAgo(daysAgo) {
  window.history.pushState("Corona map", "Corona map", "/?daysAgo=" + daysAgo);
  updateMap();
}

function getGovData() {
  fetch('/data/merged_data_all.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      govData = data;
      updateMap();
    })
}

function selectFilter(filterType) {
  let threeDaysButton, allDaysButton, oneWeekButton, twoWeekButton;
  threeDaysButton = document.getElementById('three-days-button');
  allDaysButton = document.getElementById('all-days-button');
  oneWeekButton = document.getElementById('one-weeks-button');
  twoWeekButton = document.getElementById('two-weeks-button');
  threeDaysButton.style.background = '#ffffff';
  allDaysButton.style.background = '#ffffff';
  oneWeekButton.style.background = '#ffffff';
  twoWeekButton.style.background = '#ffffff';
  switch (filterType) {
    case 'twoWeeks':
      setDaysAgo(14);
      twoWeekButton.style.background = '#FFCF4A';
      break;
    case 'week':
      setDaysAgo(7);
      oneWeekButton.style.background = '#FFCF4A';
      break;
    case '3Days':
      setDaysAgo(3);
      threeDaysButton.style.background = '#FFCF4A';
      break;
    case 'all':
      setDaysAgo(10000);
      allDaysButton.style.background = '#FFCF4A';
      break;
  }
}

function getButtonElements() {
  threeDaysButton = document.getElementById('three-days-button');
  allDaysButton = document.getElementById('all-days-button');
  oneWeekButton = document.getElementById('one-weeks-button');
  twoWeekButton = document.getElementById('two-weeks-button');;
}

function setDefaultButtonColor() {
  threeDaysButton.style.background = '#ffffff';
  allDaysButton.style.background = '#ffffff';
  oneWeekButton.style.background = '#ffffff';
  twoWeekButton.style.background = '#ffffff';
}
