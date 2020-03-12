var map, infoWindow, govData, data, processedData;
const windowWidth = window.screen.availWidth;
let markersArray = [];

function init() {
  getButtonElements();
  //getGovData();
  getData();
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
      lat: govData[j].lat,
      lng: govData[j].lon
    };
    let icon = '/assets/images/map-icons/allTime.svg';
    if (isYesterday(govData[j].pub_ts)) {
      icon = '/assets/images/map-icons/yesterday.svg';
    } else if (isToday(govData[j].pub_ts)) {
      icon = '/assets/images/map-icons/today.svg';
    }
    let marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: {
        url: icon,
        scaledSize: new google.maps.Size(20, 20)
      }
    });
    var contentStringCal = `<div class="infowindow">
                              <div class="info-label">${govData[j].label}</div>
                              <div class="info-description">${govData[j].text}</div>
                            </div>`;
    contantCelArr[j] = contentStringCal;

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infoWindow.setContent(contantCelArr[i]);
        infoWindow.open(map, marker);
      }
    })(marker, j));
    markersArray.push(marker);
  }
}

function setDaysAgo(daysAgo) {
  window.history.pushState("Corona map", "Corona map", "/?daysAgo=" + daysAgo);
  updateMap();
}

function fixTime(time) {
  return ("0" + time).slice(-2);
}

function _textulize_visit_datetime(point) {
  let d_start = new Date(point.t_start);
  let d_end = new Date(point.t_end);
  let datestring = fixTime(d_start.getDate()) + "/" + fixTime(d_start.getMonth()+1) + " בין השעות " +
      fixTime(d_start.getHours()) + ":" + fixTime(d_start.getMinutes()) + "-" +
      fixTime(d_end.getHours()) + ":" + fixTime(d_end.getMinutes());
  return datestring;
}


function processData() {
  let pointsDict = new Object();
  for (var i = 0; i < data.length; i++) {
    const point = data[i];
    let key = String([point.lat, point.lon]);
    if (!(key in pointsDict)) {
      pointsDict[key] = [point]
    } else {
      pointsDict[key].push(point)
    }
  }

  let result = []

  for (let points of Object.values(pointsDict)) {
    points.sort(function (point1, point2) {
      if (new Date(point1.t_end).getTime() > new Date(point2.t_end).getTime()) {
        return 1;
      } else {
        return -1;
      }
    });

    points = points.filter(function (point, index) {
      if (index > 0 &&
          points[index - 1].t_start === point.t_start &&
          points[index - 1].t_end === point.t_end) {
        return false;
      }

      return true;
    });

    let firstPoint = points[0];
    if (firstPoint.text.length != 0) {
      firstPoint.text += '<br><br>';
    } else {
      firstPoint.text += `<b>מספר חולה: </b>${firstPoint.pat_num}<br><br>`;
    }
    if (points.length > 1) {
      firstPoint.text += '<b>זמני ביקור: </b><br>';
      for (i = 0; i < points.length; i++) {
        firstPoint.text += '<li>' + _textulize_visit_datetime(points[i]);
      }
      firstPoint.text += '<br><br>';
    } else {
      firstPoint.text += `<b>זמן ביקור: </b>${_textulize_visit_datetime(firstPoint)}<br>`;
    }

    firstPoint.text += `<span class="pub_date"><b>תאריך פרסום: </b>${firstPoint.pub_date}</span><br>`;
    var lastPoint = points[points.length - 1];
    firstPoint.text += `<span class="quarantine-time" id="quarantine-${lastPoint.lat}-${lastPoint.lon}" class="quarantine_counter"><b>זמן לסוף הבידוד:</b></span><br>`;
    
    // Update the count down every 200 ms
    var countdownInterval = setInterval(function () { 
      var lastPoint = points[points.length - 1];
      var countdownDate = new Date(new Date(lastPoint.t_end).getTime() + 12096e5).getTime();
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countdownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

      var element = document.getElementById(`quarantine-${lastPoint.lat}-${lastPoint.lon}`)
      if (element) element.innerHTML = "<b>זמן נותר לבידוד: </b><span class=\"red-text\">" + daysLeft + " ימים " + hoursLeft + " שעות "
        + minutesLeft + " דקות " + secondsLeft + " שניות </span>";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(countdownInterval);
        var element = document.getElementById(`quarantine-${lastPoint.lat}-${lastPoint.lon}`);
        if (element) element.innerHTML = "<b>זמן נותר לבידוד:</b><span class=\"green-text\"> תמו 14 ימים מהחשיפה</span>";
      }
    }, 200);


    if (firstPoint.link) {
      firstPoint.text += `<br><a target="_blank" href="${firstPoint.link}" class="">לינק לפרסום של משרד הבריאות</a>`;
    }

    result.push(firstPoint);
  }

  return result
}

const isToday = (unixDate) => {
  const today = new Date()
  const date = new Date(unixDate * 1000);
  return date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
}

const isYesterday = (unixDate) => {
  const today = new Date()
  const date = new Date(unixDate * 1000);
  return date.getDate() == today.getDate()-1 &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
}

function getData() {
  fetch('/data/data.json')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      data = result;
      govData = processData(data);
      updateMap();
    })
}

function getGovData() {
  fetch('/data/merged_data_all.json')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      govData = result;
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

