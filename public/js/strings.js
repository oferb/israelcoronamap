
const isOnEmbedRoute = window.location.pathname.includes('embed');

const initUpdatedTime = () => {
  const updatedTime = "15.3.2020, 14:20";
  if (isOnEmbedRoute) {
    document.getElementById("last-updated-time-embed").textContent = updatedTime;
  } else {
    document.getElementById("last-updated-time").textContent = updatedTime;
  }
};

const sickDataUpdate = () => {
  const updatedTime = "15.3.2020, 21:38";
  const numberOfSickPeople = 167;
  const numberOfRecovered = 4;
  const numberOfDeaths = 0;
  const numberOfPeopleInQuarantine = '45,030';
  document.getElementById("number-of-sick-people-text").textContent = numberOfSickPeople;
  document.getElementById("number-of-recovered-people-text").textContent = numberOfRecovered;
  document.getElementById("number-of-deaths-text").textContent = numberOfDeaths;
  document.getElementById("number-of-people-in-quarantine-text").textContent = numberOfPeopleInQuarantine;
  document.getElementById("last-updated-time-sick").textContent = updatedTime;
};

initUpdatedTime();
sickDataUpdate();
