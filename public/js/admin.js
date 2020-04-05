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
