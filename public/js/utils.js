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