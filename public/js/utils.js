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