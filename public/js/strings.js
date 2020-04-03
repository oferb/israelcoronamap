
const sickElementUpdate = (id, value) => {
  if (document.getElementById(id)) {
    document.getElementById(id).textContent = value;
  }
};

const sickDataUpdate = () => {
  const updatedTime = "3.4.2020 13:49";
  const numberOfSickPeople = 7030;
  const numberOfRecovered = 357;
  const numberOfDeaths = 37;

  sickElementUpdate("number-of-sick-people-text", numberOfSickPeople);
  sickElementUpdate("number-of-recovered-people-text", numberOfRecovered);
  sickElementUpdate("number-of-deaths-text", numberOfDeaths);
  sickElementUpdate("last-updated-time-sick", updatedTime);
};

sickDataUpdate();
