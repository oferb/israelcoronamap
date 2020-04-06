// @ts-check
const getQueryParam = (name) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
};

const setQueryParam = (name, value) => {
  let urlParams = new URLSearchParams(window.location.search);
  urlParams.set(name, value);
  urlParams.sort();
  window.history.pushState('Corona map', 'Corona map', window.location.pathname + '?' + urlParams.toString());
};

const deleteQueryParam = (name) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  urlParams.delete(name);
  window.history.pushState('Corona map', 'Corona map', window.location.pathname + '?' + urlParams.toString());
};

/**
 * @typedef {{
 *  zoom: number,
 *  center: {
 *    lat: number,
 *    lng: number
 *  }
 * }} MapBounds
 */

/**
 * @param {MapBounds} mapLocation
 */
const setBoundsToLocalStorage = (mapLocation) => {
  localStorage.setItem('mapLocation', JSON.stringify(mapLocation));
}

/**
 * @returns {MapBounds}
 */
const getBoundsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('mapLocation') || 'null');
}

const convertNumberToStringWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const convertTimestampToDateAndTime = (timestamp) => {
  const date = new Date(timestamp);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  let minutes = date.getMinutes();
  minutes = (minutes < 10 ? '0' : '') + minutes;
  const hour = date.getHours();

  return `${dd}.${mm}.${yyyy} ${hour}:${minutes}`;
}
