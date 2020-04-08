$(() => {
  $('#sick-pop-up-admin-container').on('submit', (e) => {
    e.preventDefault();
    const sickNumber = $('#sickPeopleInput').val();
    const recoveredNumber = $('#recoveredPeopleInput').val();
    const deathNumber = $('#deathPeopleInput').val();
    let user = firebase.auth().currentUser;
    if (!user) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider).then(() => {
        setSickPeopleDate(sickNumber, recoveredNumber, deathNumber);
      });
    } else {
      console.log(`writing to db as ${user.email}`);
      setSickPeopleDate(sickNumber, recoveredNumber, deathNumber);
    }
  });
});

const addLabelsToInputsForCurrentStatus = (updateTime, sick, recover, death) => {
  $('#current-death-number').text(death);
  $('#current-recovered-number').text(recover);
  $('#current-sick-number').text(sick);
  $('#latest-time-update').text(updateTime);
}

getSickPeopleData(addLabelsToInputsForCurrentStatus);

const initAdminCitiesTable = (cities, table) => {
  table.bootstrapTable({
    data: cities,
    cellInputEnabled: true,
    onClickRow: (_row, element) => {
      element.css('background-color', '#cbffc0');
    },
    columns: [
      {
        field: 'city',
        title: 'שם העיר',
        cellInputEnabled: false,
        cellInputType: 'text',
      },
      {
        field: 'sick',
        title: 'מספר החולים',
        cellInputEnabled: true,
        cellInputType: 'text',
      },
      {
        field: 'population',
        title: 'אוכולוסיה לפי 2018',
        cellInputType: 'text',
      }
    ]
  });
};

$(document).ready(async () => {
  const table = $('#cities-table');
  const {cities, lastUpdate} = await getCitiesData();
  $('#latest-time-cities-update').text(convertTimestampToDateAndTime(lastUpdate));
  const citiesWithFormattedPopulation = cities.map((city) => {
    return Object.assign(city, {population: convertNumberToStringWithCommas(city.population)});
  });
  initAdminCitiesTable(citiesWithFormattedPopulation, table);

  $('#update-cities-data').click(() => {
    const dataFromTable = table.bootstrapTable('getData', {unfiltered: true});
    const updatedCitiesValues = cities.map((city, index) => {
      return Object.assign(city, {sick: parseInt(dataFromTable[index].sick)});
    })

    let user = firebase.auth().currentUser;
    if (!user) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider).then(() => {
        setCitiesData(updatedCitiesValues);
      });
    } else {
      console.log(`writing to db as ${user.email}`);
      setCitiesData(updatedCitiesValues);
    }
  });

  $('#sign-in-with-google-btn').click(signInWithGoogle);

  $('#sign-out-from-google-btn').click(() => firebase.auth().signOut());

});

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('logged', user);
    $('#user-email').text(user.email);
  } else {
    // No user is signed in.
    console.log('not logged' ,user);
    $('.admin-container').css('display', 'none');
    $('.login-container').css('display', 'flex');
  }
});