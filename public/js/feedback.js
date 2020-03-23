
firebase.initializeApp({
  apiKey: 'AIzaSyB1clMUVSN58mtwRl4UB7cK2ayscW9sHIM',
  authDomain: 'europe-west3',
  projectId: 'coronavirus-il'
});

const db = firebase.firestore();
let isUserSigned = false;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    isUserSigned = true;
    // User is signed in.
  } else {
    // No user is signed in.
    isUserSigned = false;
  }
});

$.getScript("../data/cities.js", () => {

  $('.city-input').select2({
    data: CITIES,
    dir: 'rtl',
    dropdownParent: $('.city-container'),
    placeholder: "הכניסו שם עיר או יישוב",
    width: 'element',
    language: {
      noResults: (_params) => {
        return "אין תוצאות";
      }
    }
  });

  // db.collection("users").add({
  //   first: "Ada",
  //   last: "Lovelace",
  //   born: 1815
  // })
  //   .then(function(docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch(function(error) {
  //     console.error("Error adding document: ", error);
  //   });

});

$( document ).ready(() => {
  // feeling-box selected
  $('.feeling-box').click((el) => {

    $('.feeling-box').each((_index, el) => {
      $(el).removeClass('selected');
    });

    $(el.currentTarget).addClass('selected');

  });

});

$('#submit-feedback-button').click(() => {
  showLoaderAndPreventDoubleClick();
  const selectedCity = $('#select-city-input :selected').text();
  const selectedFeeling = $('.feeling-box.selected');
  const feedbackError = [];

  if (selectedCity === '') {
    feedbackError[0] = 'עיר';
  }

  if (!selectedFeeling.length) {
    feedbackError[1] = 'הרגשה';
  }

  if (feedbackError.length) {
    // Missing fields
    $('.error-filling-feedback').css('display', 'block');
    $('#missing-feedback-fields').text(feedbackError.join(', '));
  } else {

    if (!isUserSigned) {
      firebase.auth().signInAnonymously().catch((error) => {
        // Handle Errors here.
        console.log(error);
        // ...
      });
    }
    console.log(firebase.auth().currentUser);

    // Success filling form
    $('.error-filling-feedback').css('display', 'none');
    $('#missing-feedback-fields').text('');
    $('.success-filling-feedback').css('display', 'block');
  }

  resetButton();
});

const showLoaderAndPreventDoubleClick = () => {
  $('#feedback-button-spinner').css('display', 'block');
  $('#feedback-button-text').css('display', 'none');
  $('#submit-feedback-button').addClass('disable-double-click');
};

const resetButton = () => {
  $('#feedback-button-spinner').css('display', 'none');
  $('#feedback-button-text').css('display', 'block');
  $('#submit-feedback-button').removeClass('disable-double-click');
};


