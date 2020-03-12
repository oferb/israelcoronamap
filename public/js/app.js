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
  const now = Math.round((new Date()).getTime() / 1000);
  const lastDay = now - 24*60*60;
  const lastWeek = now - 7*24*60*60;
  for (let j = 0; j < govData.length; j++) {
    if (getTimestamp(govData[j].t_end) < daysAgoDate) {
      continue;
    }
    let pos = {
      lat: govData[j].lat,
      lng: govData[j].lon
    };
    let icon = "https://firebasestorage.googleapis.com/v0/b/coronavirus-il.appspot.com/o/blue%20circle%20pin.svg?alt=media&token=a6d80cd5-acf4-4748-b581-871ab4763413";
    // if (govData[j].pub_ts > lastWeek) {
    //   icon = "https://firebasestorage.googleapis.com/v0/b/coronavirus-il.appspot.com/o/blue.svg?alt=media&token=9fccfd2b-bdbc-4a57-aa7d-8ca2b699b5f0";
    // }
    // if (govData[j].pub_ts > lastDay) {
    //   icon = "https://firebasestorage.googleapis.com/v0/b/coronavirus-il.appspot.com/o/light%20blue.svg?alt=media&token=1da58d0c-df3b-4350-b50a-d29a8c878899";
    // }
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
    let firstPoint = points[0];
    firstPoint.text += `<b>מספר חולה: </b>${firstPoint.pat_num}<br><br>`;
    if (points.length > 1) {
      firstPoint.text += '<b>זמני ביקור: </b><br>';
      for (i = 0; i < points.length; i++) {
        firstPoint.text += '<li>' + _textulize_visit_datetime(points[i]);
      }
      firstPoint.text += '<br><br>';
    } else {
      firstPoint.text += `<b>זמן ביקור: </b>${_textulize_visit_datetime(firstPoint)}<br>`;
    }

    console.log('firstPoint', firstPoint);

    firstPoint.text += `<span class="pub_date"><b>תאריך פרסום: </b>${firstPoint.pub_date}</span><br>`;
    firstPoint.text += `<span id="quarantine-${firstPoint.lat}" class="quarantine_counter"><b>זמן לסוף הבידוד: </b></span><br>`;

    // var lastPoint = points[points.length - 1];

    // Update the count down every 1 second
    var countdownInterval = setInterval(function () {
      var countDownDate = new Date(new Date(firstPoint.t_end).getTime() + 12096e5).getTime();
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // console.log("x -> distance", distance)

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById(`quarantine-${firstPoint.lat}`).innerHTML = "<b>זמן לסוף הבידוד: </b>" + days + " ימים " + hours + " שעות "
        + minutes + " דקות " + seconds + " שניות ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById(`quarantine-${firstPoint.lat}`).innerHTML = "זמן לסוף הבידוד: עברו 14 ימים";
      }
    }, 1000);


    if (firstPoint.link) {
      firstPoint.text += `<br><a target="_blank" href="${firstPoint.link}" class="">לינק לפרסום של משרד הבריאות</a>`;
    }

    result.push(firstPoint);
  }

  return result
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

