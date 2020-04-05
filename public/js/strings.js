const sickElementUpdate = (id, value) => {
  if (document.getElementById(id)) {
    document.getElementById(id).textContent = value;
  }
};

const sickDataUpdate = (updatedTime, numberOfSickPeople, numberOfRecovered, numberOfDeaths) => {
  sickElementUpdate("number-of-sick-people-text", convertNumberToStringWithCommas(numberOfSickPeople));
  sickElementUpdate("number-of-recovered-people-text", convertNumberToStringWithCommas(numberOfRecovered));
  sickElementUpdate("number-of-deaths-text", convertNumberToStringWithCommas(numberOfDeaths));
  sickElementUpdate("last-updated-time-sick", updatedTime);
};

getSickPeopleData(sickDataUpdate);
