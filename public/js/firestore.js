
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
      const updateTime = convertTimestampToDateAndTime(timestamp);

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
    cities: data,
    lastUpdate: (new Date()).getTime()
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
  let data = {};
  await db.collection("cities").doc("data").get()
    .then((doc) => {
      if (callback) {
        callback(doc.data().cities);
      }
      data = doc.data();
    })
    .catch((error) => {
      console.error(error);
    });
  return data;
};
