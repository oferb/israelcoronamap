/* eslint-disable no-unused-vars, no-undef */
let map, infoWindow, govData, data, threeDaysButton, allDaysButton, oneWeekButton, twoWeekButton, intervalId;
let currentPositionMarker = null;

const windowWidth = window.screen.availWidth;
let trackMarkersArray = [];
let citiesCirclesArray = [];

const isOnEmbedRoute = window.location.pathname.includes('embed');
let gpsIconPath = 'assets/images/map-icons/gps.svg';
let gpsBlueIconPath = 'assets/images/map-icons/gps-blue.svg';
if (isOnEmbedRoute) {
  gpsIconPath = `../${gpsIconPath}`;
  gpsBlueIconPath = `../${gpsBlueIconPath}`;
}

const init = () => {
  initLanguage();
  getData(true);
  getCitiesData(setTopCitiesMarkers);
  addJobsPoints();
};

const initNoMap = () => {
  getDataNoMap(true);
};

const getIsolationsByCity = async () => {
  let isolations = [];
  await fetch('https://services5.arcgis.com/dlrDjz89gx9qyfev/ArcGIS/rest/services/Corona_Muni_Isolations_VIEW2/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnHiddenFields=false&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=PVObvxtqMHW4v4QpznU_-TA3OVZO3JL-6wzucGinCJnUnswPHdR7DVfSxEmyzERdyqRd5VGgTKKkAEMnH7wOVj2tjkor8cGjnV1aU8h2uFhrxqCCEHgsbhy4ZjI2P9i-Cce8bpCTmIjmT7k-UKAaMSZTXANXZfICZYL89Yztjn6CTNaLMtdErTeO71zAKRJ9yiqeG78EdXTYzFUkdexnI4Slatc4y6q7hq6nD9dO6VGhK5gesIhFCXXWe4kD9jhf')
    .then((response) => {return response.json();})
    .then((data) => {
      isolations = data.features;
    });
  return isolations;
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
    currentPositionMarker.circle.setMap(null);
  }

  if (navigator.geolocation) {
    toggleGPSIconColorOnClick();
    navigator.geolocation.getCurrentPosition(position => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
      map.setZoom(17);

      currentPositionMarker = new google.maps.Marker({
        position: pos,
        map,
        zIndex: 5

      });
      const circle = new google.maps.Circle({
        strokeColor: '#1eb2a6',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#d4f8e8',
        fillOpacity: 0.35,
        map: map,
        center: pos,
        radius: 100
      });

      google.maps.event.addListener(circle, 'click', () => {
        const text = `<div style="padding: 3px;
                                  text-align: center;
                                  font-size: 16px;
                                  font-weight: 600;">זה טווח של 100 מטרים מהמיקום הנוכחי שלך.</div>`;
        infoWindow.setPosition(circle.getCenter());
        infoWindow.setContent(text);
        infoWindow.open(map);
      });

      circle.bindTo('center', currentPositionMarker, 'position');
      currentPositionMarker.circle = circle;

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
  const {center, zoom} = getBoundsFromLocalStorage() || {
    center: windowWidth >= 500 ? { lat: 31.6, lng: 34.969073 } : { lat: 31.1, lng: 34.969073 },
    zoom: windowWidth >= 500 ? 8 : 7
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center,
    zoom,
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

  map.addListener('bounds_changed', function() {
    const center = map.getCenter();
    const mapLocation = {
      zoom: map.getZoom(),
      center: {
        lat: center.lat(),
        lng: center.lng()
      }
    };
    setBoundsToLocalStorage(mapLocation);
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

const getTimestamp = (stringTime) => {
  return new Date(stringTime).getTime();
};

const centerAndZoomToPoint = (point) => {
  const center = new google.maps.LatLng(point.lat, point.lon);
  map.panTo(center);
  map.setZoom(12);
};

const setSickPeopleTrackMarkers = () => {

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

    trackMarkersArray.push(marker);
  }
};

const addJobsPoints = () => {
  const doorToDor = new google.maps.Marker({
    position: {
      lat: 32.075049,
      lng: 34.774725
    },
    map,
    icon: {
      url: '/assets/images/map-icons/delivery-icon.svg'
    },
    zIndex: 4000
  });
  google.maps.event.addListener(doorToDor, 'click', () => {
    const text = `<div id="jobs-container" class="infowindow ${langDirection === 'ltr' ? 'text-left' : ''}">
                         <div class="jobs-title">Door 2 Dor</div>
                         <div class="jobs-subtitle">מיזם בהתנדבות לאוכלוסיה בסיכון, מביאים עד הבית אוכל ותרופות</div>
                         <div class="jobs-group">
                              <div class="jobs-label">אזורי חלוקה</div>
                              <div class="jobs-value">כל הארץ</div>
                         </div>
                         <div class="jobs-group">
                             <div class="jobs-label">עלות המשלוח</div>
                             <div class="jobs-value">ללא - מיזם בהתנדבות</div>
                         </div>
                         <div class="jobs-group">
                           <div class="door-2-dor-link">
                              <div class="jobs-label">לינק למיזם</div>
                              <a target="_blank" href="https://www.door2dor.co.il/" style="font-size: 15px">www.door2dor.co.il</a>
                           </div>
                         </div>
                      </div>`;

    infoWindow.setContent(text);
    infoWindow.open(map, doorToDor);
  });

  const carmiFalafel = new google.maps.Marker({
    position: {
      lat: 31.809849,
      lng: 34.654607
    },
    map,
    icon: {
      url: '/assets/images/map-icons/street-food-icon.svg'
    },
    zIndex: 4000
  });
  google.maps.event.addListener(carmiFalafel, 'click', () => {
    const text = `<div id="jobs-container" class="infowindow ${langDirection === 'ltr' ? 'text-left' : ''}">
                         <div class="jobs-title">פלאפל כרמי</div>
                         <div class="jobs-subtitle">פלאפל כרמי, תזמינו פלאפל טעים מאיש עם לב רחב, ברחוב זבוטינסקי באשדוד</div>
                         <div class="jobs-group">
                              <div class="jobs-label">משלוחים</div>
                              <div class="jobs-value">מבצע משלוחים</div>
                         </div>
                         <div class="jobs-group">
                             <div class="jobs-label">טלפון להזמנות</div>
                             <div class="jobs-value">054-4421366</div>
                         </div>
                      </div>`;

    infoWindow.setContent(text);
    infoWindow.open(map, carmiFalafel);
  });
};

const setTopCitiesMarkers = (cities) => {
  const HIGH_SICK_PEOPLE = 800;
  const MODERATE_SICK_PEOPLE = 200;

  cities.forEach((city) => {

    let icon = '/assets/images/map-icons/city-small.svg';

    const numberOfSickPeople = parseInt(city.sick);

    if (numberOfSickPeople >= HIGH_SICK_PEOPLE) {
      icon = '/assets/images/map-icons/city-l.svg';
    }

    if (numberOfSickPeople >= MODERATE_SICK_PEOPLE && numberOfSickPeople < HIGH_SICK_PEOPLE) {
      icon = '/assets/images/map-icons/city-m.svg';
    }

    const circle = new google.maps.Marker({
      position: city.position,
      map,
      icon: {
        url: icon
      },
      zIndex: 3000
    });

    citiesCirclesArray.push(circle);

    google.maps.event.addListener(circle, 'click', () => {
      const text = `<div id="sick-people-city-container" class="infowindow ${langDirection === 'ltr' ? 'text-left' : ''}">
                         <div class="sick-city-title">${city.city}</div>
                         <div class="sick-city-population">
                              <span class="sick-city-label">מספר תושבים: </span>
                              <span class="sick-city-value">${convertNumberToStringWithCommas(city.population)}</span>
                         </div>
                         <div class="sick-city-number-of-sickness">
                             <span class="sick-city-label">מספר חולים מאומתים: </span>
                             <span class="sick-city-value">${convertNumberToStringWithCommas(city.sick)}</span>
                         </div>
                      </div>`;

      infoWindow.setContent(text);
      infoWindow.open(map, circle);
    });
  });
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
  setSickPeopleTrackMarkers();
};

const fixTime = (time) => {
  return ("0" + time).slice(-2);
};

const _textulize_visit_datetime = (point) => {
  let d_start = new Date(point.t_start);
  let d_end = new Date(point.t_end);
  let datestring = `${fixTime(d_start.getDate())}/${fixTime(d_start.getMonth() + 1)} ${i18n('betweenTheHours')}${point.stayTimes}`;
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

const filterPoints = points => points.filter((point, index) => {
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
  const pointsData = data['points'];
  for (let i = 0; i < pointsData.length; i++) {
    const point = pointsData[i];
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

const getData = (initMode = false) => {
  const language = getLanguage();
  fetch(`/data/data-${language}.json`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      data = result;
      govData = processData(data);
      initUpdatedTime(data['update_time']);
      //addFlightsMapPoint();
      // Map is filtered by default
      if (initMode) {
        setDaysAgo(14);
      }
      setSickPeopleTrackMarkers();
      toggleSickTracksOnMap({shouldShowTracks: false});
    });
};

const getDataNoMap = (initMode = false) => {
  const language = getLanguage();
  fetch(`/data/data-${language}.json`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      data = result;
      govData = data;
    });
};


const initUpdatedTime = (updatedTime) => {
  const date = new Date(updatedTime * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = date.getMinutes();
  const updatedTimeString = hours + ':' + minutes;
  const embedDatetime = document.getElementById("last-updated-time-embed");
  if (embedDatetime) {
    embedDatetime.textContent = updatedTimeString;
  } else {
    document.getElementById("last-updated-time").textContent = updatedTimeString;
  }
};

const changeLanguage = (language) => {
  $('#language-popup').modal('toggle');
  setLanguage(language);
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


const toggleCitiesOnMap = ({shouldShowCities}) => {
  citiesCirclesArray.forEach((city) => {
    city.setMap(shouldShowCities ? map : null);
  });

};

const toggleSickTracksOnMap = ({shouldShowTracks}) => {
  trackMarkersArray.forEach((track) => {
    track.setVisible(shouldShowTracks);
  });
};
