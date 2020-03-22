
const isOnEmbed = window.location.pathname.includes('embed');

const initUpdatedTime = () => {
  const updatedTime = "22.3.2020, 17:45";
  if (isOnEmbed) {
    document.getElementById("last-updated-time-embed").textContent = updatedTime;
  } else {
    document.getElementById("last-updated-time").textContent = updatedTime;
  }
};

const sickDataUpdate = () => {
  const updatedTime = "22.3.2020, 22:10";
  const numberOfSickPeople = 1071;
  const numberOfRecovered = 37;
  const numberOfDeaths = 1;
  document.getElementById("number-of-sick-people-text").textContent = numberOfSickPeople;
  document.getElementById("number-of-recovered-people-text").textContent = numberOfRecovered;
  document.getElementById("number-of-deaths-text").textContent = numberOfDeaths;
  document.getElementById("last-updated-time-sick").textContent = updatedTime;
};

initUpdatedTime();
sickDataUpdate();
