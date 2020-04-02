
const sickDataUpdate = () => {
  const updatedTime = "2.4.2020 12:20";
  const numberOfSickPeople = 6211;
  const numberOfSickPeopleYesterday = 2030;
  const numberOfRecovered = 289;
  const numberOfRecoveredYesterday = 58;
  const numberOfDeaths = 29;
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
