/* eslint-disable no-undef */
let map, infoWindow, govData, data,
    threeDaysButton, allDaysButton, oneWeekButton, twoWeekButton, currentLocation = {};
let currentPositionMarker = null;
const windowWidth = window.screen.availWidth;
let markersArray = [];
let previousCenters = [];

const init = () => {
  getButtonElements();
  getData();
};

const updateCurrentLocation = (data) => {
  if(data && data.coords){
    currentLocation = data.coords;

    map.setCenter(new google.maps.LatLng(currentLocation.latitude, currentLocation.longitude))

    setTimeout(() => {
      map.setZoom(15);
    }, 500);
  }
}

const zoomToLocation = () => {
  // clear previous marker
  if (currentPositionMarker) {
    currentPositionMarker.setMap(null);
  }
  document.getElementById('zoom-to-location-icon').src = 'assets/images/map-icons/gps-blue.svg';
  setTimeout(() => {
    document.getElementById('zoom-to-location-icon').src = 'assets/images/map-icons/gps.svg';
  }, 3000);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      map.setCenter(pos);
      map.setZoom(12);

      currentPositionMarker = new google.maps.Marker({
        position: pos,
        animation: google.maps.Animation.DROP,
        map: map,
      });
      currentPositionMarker.setMap(map);
    }, () => {
      handleLocationError('לא אישרת מיקום');
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError('הדפדפן שלך לא תומך במיקום');
  }
}

const handleLocationError = (message) => {
  // TODO: Show a toast
};


// This should remain with function syntax since it is called in the google maps callback
// eslint-disable-next-line func-style, no-unused-vars
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: windowWidth >= 500 ? { lat: 31.6, lng: 34.969073 } : { lat: 31.1, lng: 34.969073 },
    zoom: windowWidth >= 500 ? 8 : 7,
    gestureHandling: "greedy",
    streetViewControl: false
  });
  infoWindow = new google.maps.InfoWindow;
  map.addListener('mousedown', function () {
    if (infoWindow) {
      infoWindow.close();
      window.history.pushState("Corona map", "Corona map", "/");
    }
  });
  previousCenters[0] = map.getCenter();
  previousCenters[1] = map.getCenter();
  previousCenters[2] = map.getCenter();
  map.addListener('center_changed', function() {
    const screenDistance = dist(map.getBounds().getNorthEast(), map.getBounds().getSouthWest());
    for (let i = 0; i < previousCenters.length; i++) {
      const movementDistance = dist(previousCenters[i], map.getCenter());
      if (movementDistance/screenDistance > 1) {
        try{
          map.setCenter(previousCenters[0]);
          break;
        }catch(e){}
      }
    }
    previousCenters[2] = previousCenters[1];
    previousCenters[1] = previousCenters[0];
    previousCenters[0] = map.getCenter();
  });
  init();
}

const dist = (p1, p2) => {
  return Math.sqrt(Math.pow(p2.lat()-p1.lat(),2)+Math.pow(p2.lng()-p1.lng(),2));
};

const getTimestamp = (stringTime) => {
  return new Date(stringTime).getTime();
};

const getQueryParam = (name) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
};

const clearMarkers = () => {
  for (let i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
};

const centerAndZoomToPoint = (point) => {
  const center = new google.maps.LatLng(point.lat, point.lon);
  map.panTo(center);
  map.setZoom(12);
};

const updateMap = () => {
  clearMarkers();

  let daysAgo = parseInt(getQueryParam('daysAgo'));
  if (isNaN(daysAgo)) {
    daysAgo = 10000;
  }
  const daysAgoDate = new Date();
  daysAgoDate.setDate(daysAgoDate.getDate() - daysAgo);
  const contentCelArr = [];

  const reqPointId = getQueryParam('id');
  for (let j = 0; j < govData.length; j++) {
    const currPoint = govData[j];
    if (getTimestamp(currPoint.t_end) < daysAgoDate) {
      continue;
    }
    const position = {
      lat: currPoint.lat,
      lng: currPoint.lon
    };
    let icon = '/assets/images/map-icons/allTime.svg';
    let zIndex = 1000;
    if (isYesterday(currPoint.pub_ts)) {
      icon = '/assets/images/map-icons/yesterday.svg';
      zIndex = 2000;
    } else if (isToday(currPoint.pub_ts)) {
      icon = '/assets/images/map-icons/today.svg';
      zIndex = 3000;
    }
    const marker = new google.maps.Marker({
      position,
      map,
      icon: {
        url: icon
      },
      zIndex
    });

    const contentStringCal = `<div class="infowindow">
                                <div class="info-label">${currPoint.label}</div>
                                <div class="info-description">${currPoint.text}</div>
                              </div>`;
    contentCelArr[j] = contentStringCal;
    if (currPoint.id === reqPointId) {
      centerAndZoomToPoint(currPoint);
      infoWindow.setContent(contentStringCal);
      infoWindow.open(map, marker);
    }

    let id = currPoint.id;

    google.maps.event.addListener(marker, 'click', (function (marker, i, id) {
      return function () {
        infoWindow.setContent(contentCelArr[i]);
        infoWindow.open(map, marker);
        window.history.pushState("Corona map", "Corona map", "/?id=" + id);
      };
    })(marker, j, id));
    markersArray.push(marker);
  }
};

const setDaysAgo = (daysAgo) => {
  window.history.pushState("Corona map", "Corona map", "/?daysAgo=" + daysAgo);
  updateMap();
};

const fixTime = (time) => {
  return ("0" + time).slice(-2);
};

const _textulize_visit_datetime = (point) => {
  let d_start = new Date(point.t_start);
  let d_end = new Date(point.t_end);
  let datestring = fixTime(d_start.getDate()) + "/" + fixTime(d_start.getMonth() + 1) + " בין השעות " +
    fixTime(d_start.getHours()) + ":" + fixTime(d_start.getMinutes()) + "-" +
    fixTime(d_end.getHours()) + ":" + fixTime(d_end.getMinutes());
  return datestring;
};

const sortPoints = (points) => {
  points.sort((point1, point2) => {
    if (new Date(point1.t_end).getTime() > new Date(point2.t_end).getTime()) {
      return 1;
    } else {
      return -1;
    }
  });
  return points;
};

const filterPoints = points =>
  points.filter((point, index) => {
    if (index > 0 &&
      points[index - 1].t_start === point.t_start &&
      points[index - 1].t_end === point.t_end) {
      return false;
    }

    return true;
  });

const processData = () => {
  const pointsDict = new Object();
  for (let i = 0; i < data.length; i++) {
    const point = data[i];
    const key = String([point.lat, point.lon]);
    if (!(key in pointsDict)) {
      pointsDict[key] = [point];
    } else {
      pointsDict[key].push(point);
    }
  }

  let result = [];
  const countdownIntervals = {};
  for (let points of Object.values(pointsDict)) {
    sortPoints(points);
    points = filterPoints(points);

    const firstPoint = points[0];
    if (firstPoint.text.length !== 0) {
      firstPoint.text += '<br><br>';
    } else {
      firstPoint.text += `<b>מספר חולה: </b>${firstPoint.pat_num}<br><br>`;
    }
    if (points.length > 1) {
      firstPoint.text += '<b>זמני ביקור: </b><br>';
      for (let i = 0; i < points.length; i++) {
        firstPoint.text += '<li>' + _textulize_visit_datetime(points[i]);
      }
      firstPoint.text += '<br><br>';
    } else {
      firstPoint.text += `<b>זמן ביקור: </b>${_textulize_visit_datetime(firstPoint)}<br>`;
    }

    firstPoint.text += `<span class="pub_date"><b>תאריך פרסום: </b>${firstPoint.pub_date}</span><br>`;
    const lastPoint = points[points.length - 1];
    const key = `${lastPoint.lat}-${lastPoint.lon}`;
    firstPoint.text += `<span class="quarantine-time" id="quarantine-${key}" class="quarantine_counter"><b>זמן נותר לשוהים בבידוד:</b></span><br>`;

    // Update the count down every 1 second
    countdownIntervals[key] = setInterval(() => {
      const countdownDate = new Date(new Date(lastPoint.t_end).getTime() + 12096e5).getTime();
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

      const element = document.getElementById(`quarantine-${key}`);
      if (element) element.innerHTML = "<b>זמן נותר לשוהים בבידוד: </b><br><span class=\"red-text\">" + daysLeft + " ימים " + hoursLeft + " שעות "
        + minutesLeft + " דקות " + secondsLeft + " שניות </span>";

      // If the count down is finished, write some text
      if (distance < 0) {
        if (element) {
          element.innerHTML = "<b>זמן נותר לשוהים בבידוד:</b><br><span class=\"green-text\"> תמו 14 ימים ממועד החשיפה</span>";
        }
      }
    }, 1000);


    if (firstPoint.link) {
      firstPoint.text += `<br><a target="_blank" href="${firstPoint.link}" class="">לינק לפרסום של משרד הבריאות</a>`;
    }

    result.push(firstPoint);
  }
  return result;
};

const isToday = (unixDate) => {
  const today = new Date();
  const date = new Date(unixDate * 1000);
  return date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear();
};

const isYesterday = (unixDate) => {
  const today = new Date();
  const date = new Date(unixDate * 1000);
  return date.getDate() == today.getDate() - 1 &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear();
};

const getData = () => {
  fetch('/data/data.json')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      data = result;
      govData = processData(data);
      updateMap();
    });
};

// eslint-disable-next-line no-unused-vars
const selectFilter = (filterType) => {
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
};

const getButtonElements = () => {
  threeDaysButton = document.getElementById('three-days-button');
  allDaysButton = document.getElementById('all-days-button');
  oneWeekButton = document.getElementById('one-weeks-button');
  twoWeekButton = document.getElementById('two-weeks-button');
};
