
firebase.initializeApp({
  apiKey: 'AIzaSyB1clMUVSN58mtwRl4UB7cK2ayscW9sHIM',
  authDomain: 'coronavirus-il.firebaseapp.com',
  projectId: 'coronavirus-il'
});

const db = firebase.firestore();

const getSickPeopleData = (callback = undefined) => {
  db.collection("sick-pop-up").doc('data').get().then((doc) => {
    const {death, recover, sick, timestamp} = doc.data();
    if (callback) {
      const date = new Date(timestamp);
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const yyyy = date.getFullYear();

      let minutes = date.getMinutes();
      minutes = (minutes < 10 ? '0' : '') + minutes;
      const hour = date.getHours();

      const updateTime = `${dd}.${mm}.${yyyy} ${hour}:${minutes}`;

      callback(updateTime, sick, recover, death);
    }
  });
};

const setSickPeopleDate = (sickNumber, recoverNumber, deathNumber) => {
  db.collection("sick-pop-up").doc("data").set({
    death: deathNumber,
    recover: recoverNumber,
    sick: sickNumber,
    timestamp: (new Date()).getTime()
  })
    .then(() => {
      $('#submit-success').css('display', 'block');
      $('#submit-failed').css('display', 'none');
    })
    .catch((error) => {
      $('#submit-success').css('display', 'none');
      $('#submit-failed').css('display', 'block');
      console.error(error);
    });
};

const setCitiesData = (data) => {
  db.collection("cities").doc("data").set({
    cities: data
  })
    .then(() => {
      $('#submit-cities-success').css('display', 'block');
      $('#submit-cities-failed').css('display', 'none');
    })
    .catch((error) => {
      $('#submit-cities-success').css('display', 'none');
      $('#submit-cities-failed').css('display', 'block');
      console.error(error);
    });
};

const getCitiesData = async (callback = undefined) => {
  let cities = [];
  await db.collection("cities").doc("data").get()
    .then((doc) => {
      if (callback) {
        callback(doc.data().cities);
      }
      cities = doc.data().cities;
    })
    .catch((error) => {
      console.error(error);
    });
  return cities;
};
