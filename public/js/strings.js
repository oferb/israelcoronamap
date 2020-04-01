
const sickDataUpdate = () => {
  const updatedTime = "1.4.2020, 12:00";
  const numberOfSickPeople = 5591;
  const numberOfSickPeopleYesterday = 2030;
  const numberOfRecovered = 226;
  const numberOfRecoveredYesterday = 58;
  const numberOfDeaths = 21;
  const numberOfDeathsToday = 0;

  document.getElementById("number-of-sick-people-text").textContent = numberOfSickPeople;
  document.getElementById("number-of-sick-people-today").textContent = `${numberOfSickPeople - numberOfSickPeopleYesterday} ${i18n('today')}`;

  document.getElementById("number-of-recovered-people-text").textContent = numberOfRecovered;
  document.getElementById("number-of-recovered-people-today").textContent = `${numberOfRecovered - numberOfRecoveredYesterday} ${i18n('today')}`;

  document.getElementById("number-of-deaths-text").textContent = numberOfDeaths;
  document.getElementById("number-of-deaths-today").textContent = `${numberOfDeathsToday} ${i18n('today')}`;

  document.getElementById("last-updated-time-sick").textContent = updatedTime;
};

sickDataUpdate();
