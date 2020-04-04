
const sickElementUpdate = (id, value) => {
  if (document.getElementById(id)) {
    document.getElementById(id).textContent = value;
  }
};

const sickDataUpdate = () => {
  const updatedTime = "4.4.2020 21:50";
  const numberOfSickPeople = 7851;
  const numberOfRecovered = 458;
  const numberOfDeaths = 43;

  sickElementUpdate("number-of-sick-people-text", numberOfSickPeople);
  sickElementUpdate("number-of-recovered-people-text", numberOfRecovered);
  sickElementUpdate("number-of-deaths-text", numberOfDeaths);
  sickElementUpdate("last-updated-time-sick", updatedTime);
};

sickDataUpdate();
