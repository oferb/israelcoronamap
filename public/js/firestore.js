
firebase.initializeApp({
  apiKey: 'AIzaSyB1clMUVSN58mtwRl4UB7cK2ayscW9sHIM',
  authDomain: 'coronavirus-il.firebaseapp.com',
  projectId: 'coronavirus-il'
});

const db = firebase.firestore();

const getSickPeopleData = (callback = undefined) => {
  db.collection("sick-pop-up").doc('data').get().then((doc) => {
    console.log(doc.data());
    const {death, recover, sick, timestamp} = doc.data();
    if (callback) {
      const date = new Date(timestamp);
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const yyyy = date.getFullYear();

      const minutes = date.getMinutes();
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
