/* eslint-disable no-unused-vars, no-undef */
let map, infoWindow, govData, data, threeDaysButton, allDaysButton, oneWeekButton, twoWeekButton, intervalId;
let currentPositionMarker = null;

const windowWidth = window.screen.availWidth;
let markersArray = [];

const isOnEmbedRoute = window.location.pathname.includes('embed');
let gpsIconPath = 'assets/images/map-icons/gps.svg';
let gpsBlueIconPath = 'assets/images/map-icons/gps-blue.svg';
if (isOnEmbedRoute) {
  gpsIconPath = `../${gpsIconPath}`;
  gpsBlueIconPath = `../${gpsBlueIconPath}`;
}

const init = () => {
  initLanguage();
  setMapReader();
  getData(true);
};

const zoomToLocation = () => {

  ga('send', {
    hitType: 'event',
    eventCategory: 'ZoomToLocation',
    eventAction: 'Click',
    eventLabel: 'Zoom to current position'
  });

  // clear previous marker
  if (currentPositionMarker) {
    currentPositionMarker.setMap(null);
  }

  if (navigator.geolocation) {
    toggleGPSIconColorOnClick();
    navigator.geolocation.getCurrentPosition(position => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
      map.setZoom(13);

      currentPositionMarker = new google.maps.Marker({
        position: pos,
        map,
        zIndex: 5000
      });
      currentPositionMarker.setMap(map);
    }, () => {
      handleLocationError('לא אישרת מיקום');
    });
  } else {
    showOriginalIcon();
    // Browser doesn't support Geolocation
    handleLocationError('הדפדפן שלך לא תומך במיקום');
  }
};

const handleLocationError = () => {
  // TODO: Show a toast
  showOriginalIcon();
};

const showOriginalIcon = () => {
  document.getElementById('zoom-to-location-icon').src = gpsIconPath;
};

const toggleGPSIconColorOnClick = () => {
  document.getElementById('zoom-to-location-icon').src = gpsBlueIconPath;
  setTimeout(() => {
    document.getElementById('zoom-to-location-icon').src = gpsIconPath;
  }, 3000);
};

// This should remain with function syntax since it is called in the google maps callback
// eslint-disable-next-line func-style, no-unused-vars
function initMap() {

  const ISRAEL_BOUNDS = {
    north: 36.440135095195288,
    south: 25.937822999999995,
    west: 30.65619800118771,
    east: 39.000322999999995,
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: windowWidth >= 500 ? { lat: 31.6, lng: 34.969073 } : { lat: 31.1, lng: 34.969073 },
    zoom: windowWidth >= 500 ? 8 : 7,
    minZoom: 7,
    maxZoom: 18,
    gestureHandling: "greedy",
    disableDefaultUI: true,
    restriction: {
      latLngBounds: ISRAEL_BOUNDS,
      strictBounds: false
    },
  });
  infoWindow = new google.maps.InfoWindow;
  map.addListener('mousedown', function () {
    if (infoWindow) {
      infoWindow.close();
      const urlWithoutID = removeURLParameter(window.location.href, 'id');
      window.history.pushState("Corona map", "Corona map", urlWithoutID);
    }
  });

  google.maps.event.addDomListener(document.getElementById('zoomInButton'), 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });

  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(document.getElementById('zoomOutButton'), 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });

  init();
}

const dist = (p1, p2) => {
  return Math.sqrt(Math.pow(p2.lat() - p1.lat(),2) + Math.pow(p2.lng() - p1.lng(),2));
};

const getTimestamp = (stringTime) => {
  return new Date(stringTime).getTime();
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
    // let icon = '/assets/images/map-icons/allTime.svg';
    // let zIndex = 1000;
    // if (isYesterday(currPoint.pub_ts)) {
    //   icon = '/assets/images/map-icons/yesterday.svg';
    //   zIndex = 2000;
    // } else if (isToday(currPoint.pub_ts)) {
    //   icon = '/assets/images/map-icons/today.svg';
    //   zIndex = 3000;
    // }
    icon = '/assets/images/map-icons/yesterday.svg';
    zIndex = 2000;
    const marker = new google.maps.Marker({
      position,
      map,
      icon: {
        url: icon
      },
      zIndex
    });

    const contentStringCal = `<div
                                id="infowindow" 
                                class="infowindow ${langDirection === 'ltr' ? 'text-left' : ''}"
                              >
                                <div class="info-label">${currPoint.label}</div>
                                <div class="info-description">${currPoint.text}</div>
                              </div>`;
    contentCelArr[j] = contentStringCal;
    if (currPoint.id === reqPointId) {
      updateCountdown(currPoint);
      key = pointKey(currPoint);
      intervalId = setInterval(() => {
        updateCountdown(currPoint);
      }, 1000);
      centerAndZoomToPoint(currPoint);
      infoWindow.setContent(contentStringCal);
      infoWindow.open(map, marker);
    }

    let id = currPoint.id;

    google.maps.event.addListener(marker, 'click', ((marker, i, id) => {
      return () => {
        clearInterval(intervalId);

        infoWindow.setContent(contentCelArr[i]);
        infoWindow.open(map, marker);

        setQueryParam('id', id);

        updateCountdown(currPoint);
        key = pointKey(currPoint);
        intervalId = setInterval(() => {
          updateCountdown(currPoint);
        }, 1000);

      };
    })(marker, j, id));

    markersArray.push(marker);
  }
};

const addFlightsMapPoint = () => {
  const position = {
    lat: 32.005528,
    lng: 34.885392
  };
  const icon = '/assets/images/map-icons/plane-map-icon.svg';
  const marker = new google.maps.Marker({
    position,
    map,
    icon: {
      url: icon
    },
    zIndex: 5000
  });
  google.maps.event.addListener(marker, 'click', ((marker) => {
    return () => {
      const contentStringCal = `<div
        id="infowindow" 
        class="infowindow ${langDirection === 'ltr' ? 'text-left' : ''}"
      >
        <div class="info-label">טיסות שבהן שהו חולי קורונה</div>
        <div class="info-description"><a href="/flights">לפירוט הטיסות</a></div>
      </div>`;

      infoWindow.setContent(contentStringCal);
      infoWindow.open(map, marker);
      window.history.pushState("Corona map", "Corona map", "/");
    };
  })(marker));
};

const updateCountdown = currPoint => {
  const countdownDate = new Date(new Date(currPoint.last_end).getTime() + 12096e5).getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

  const key = pointKey(currPoint);
  const element = document.getElementById(`quarantine-${key}`);
  if (!element) return;

  element.innerHTML = `<b>${i18n('timeLeftForStayingInSolitary')}</b><br><span class="red-text"> ${daysLeft} ${i18n('days')} ${hoursLeft} ${i18n('hours')}
    ${minutesLeft} ${i18n('minutes')} ${secondsLeft} ${i18n('secondes')}</span>`;

  if (distance < 0) {
    element.innerHTML = `<b>${i18n('timeLeftForStayingInSolitary')}</b><br><span class="green-text"> ${i18n('expire14DaysAfterExposure')}</span>`;
    clearInterval(intervalId);
  }

};

const setDaysAgo = (daysAgo) => {
  setQueryParam('daysAgo', daysAgo);
  updateMap();
};

const fixTime = (time) => {
  return ("0" + time).slice(-2);
};

const _textulize_visit_datetime = (point) => {
  let d_start = new Date(point.t_start);
  let d_end = new Date(point.t_end);
  let datestring = point.stayTimes;
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

const uniquifyArray = (array) => {
  const arraySet = new Set(array);
  const uniqueArray = Array.from(arraySet);
  return uniqueArray.filter(val => val);
};

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
  for (let points of Object.values(pointsDict)) {
    sortPoints(points);
    const patNums = points.map(point => point.pat_num);
    const uniquePatNums = uniquifyArray(patNums);
    points = filterPoints(points);

    const firstPoint = points[0];
    if (firstPoint.text.length !== 0) {
      firstPoint.text += '<br><br>';
    } else {
      // firstPoint.text += `<b>${i18n('patientNumber')}: </b>${uniquePatNums.join(', ')}<br><br>`;
    }
    if (points.length > 1) {
      firstPoint.text += `<b>${i18n('visitingTimes')} </b><br>`;
      for (let i = 0; i < points.length; i++) {
        firstPoint.text += '<li>' + _textulize_visit_datetime(points[i]);
      }
      firstPoint.text += '<br><br>';
    } else {
      firstPoint.text += `<b>${i18n('visitingTime')} </b>${_textulize_visit_datetime(firstPoint)}<br>`;
    }
    // firstPoint.text += `<span class="pub_date"><b>${i18n('publishedDate')}: </b>${firstPoint.pub_date}</span><br>`;

    const lastPoint = points[points.length - 1];
    firstPoint.last_end = lastPoint.t_end;
    const key = pointKey(firstPoint);
    firstPoint.text += `<span class="quarantine-time" id="quarantine-${key}" class="quarantine_counter"></span><br>`;
    if (firstPoint.link) {
      firstPoint.text += `<br><a target="_blank" href="${firstPoint.link}">${i18n('linkToTheMinistryOfHealthPublication')}</a>`;
    }

    result.push(firstPoint);
  }
  return result;
};

const pointKey = point => `${point.lat}-${point.lon}`;

const isToday = (unixDate) => {
  const today = new Date();
  const date = new Date(unixDate * 1000);
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
};

const isYesterday = (unixDate) => {
  const today = new Date();
  const date = new Date(unixDate * 1000);
  return date.getDate() === today.getDate() - 1 &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
};

const getData = (initMode = false) => {
  const language = getLanguage();
  fetch(`/data/data-${language}.json`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      data = result;
      govData = processData(data);
      addFlightsMapPoint();
      // Map is filtered by default
      if (initMode) {
        setDaysAgo(14);
      }
      updateMap();
    });
};

// eslint-disable-next-line no-unused-vars
const selectFilter = (filterType) => {
  switch (filterType) {
  case 'twoWeeks':
    setDaysAgo(14);
    break;
  case 'all':
    setDaysAgo(10000);
    break;
  }
};

const changeLanguage = (language) => {
  $('#language-popup').modal('toggle');
  setLanguage(language);
  setMapReader();
  getData();
};

const removeURLParameter = (url, parameter) => {
  //prefer to use l.search if you have a location/link object
  const urlparts = url.split('?');
  if (urlparts.length >= 2) {

    const prefix = encodeURIComponent(parameter) + '=';
    const pars = urlparts[1].split(/[&;]/g);

    //reverse iteration as may be destructive
    for (let i = pars.length; i-- > 0;) {
      //idiom for string.startsWith
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1);
      }
    }

    url = urlparts[0] + '?' + pars.join('&');
    return url;
  } else {
    return url;
  }
};

const setMapReader = () => {
  let mapReaderContainer = document.getElementById('map-reader');
  mapReaderContainer.innerHTML = `
  <img alt="map-reader" src="/assets/images/map-icons/mapReader-${getLanguage()}.svg" class="map-reader-img" width="350" />
  `;
};