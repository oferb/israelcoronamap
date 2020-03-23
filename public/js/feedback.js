
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

  const cityInput = $('.city-input');

  cityInput.select2({
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

  const cityId = localStorage.getItem('feedback-city-id');
  if (cityId) {
    cityInput.val(cityId).trigger('change.select2')
  }

});

$( document ).ready(() => {
  // feeling-box selected
  $('.feeling-box').click((el) => {

    $('.feeling-box').each((_index, el) => {
      $(el).removeClass('selected');
    });

    $(el.currentTarget).addClass('selected');

  });

  $('.report-pop-up-click').click(showFeedbackPopup);

  $('#close-feedback-popup').click(() => {
    $('#report-pop-up').fadeOut('fast');
    window.history.pushState("Corona map", "Corona map", "/");
  });

});

const showFeedbackPopup = () => {
  ga('send', {
    hitType: 'event',
    eventCategory: 'ClickOnFeedbackPopUp',
    eventAction: 'Click',
    eventLabel: 'User open feedback page'
  });
  $('#report-pop-up').fadeIn('fast');
  window.history.pushState("Corona map", "Corona map", "/feedback");
};

$('#submit-feedback-button').click(async () => {

  ga('send', {
    hitType: 'event',
    eventCategory: 'SendFeedback',
    eventAction: 'Click',
    eventLabel: 'User send feedback'
  });

  cleanErrors();
  showSuccessMessage(false);
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
    showSuccessMessage(false);
    resetButton();
  } else {

    if (!isUserSigned) {
      await firebase.auth().signInAnonymously().catch((error) => {
        console.error(error);
      });
    }

    const userId = firebase.auth().currentUser.uid;
    const cityId = $('#select-city-input').val();
    const county = getCounty(cityId);
    const feeling = $('.feeling-box.selected .feeling-text').text();
    await saveFormToDB({
      id: userId,
      city: selectedCity,
      cityId,
      county,
      feeling
    });
  }
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

const cleanErrors = () => {
  $('.error-filling-feedback').css('display', 'none');
  $('#missing-feedback-fields').text('');
  $('.network-error-filling-feedback').css('display', 'none');
};

const showSuccessMessage = (show) => {
  $('.success-filling-feedback').css('display', show ? 'block' : 'none');
};

const saveFormToDB = async ({
  id,
  city,
  cityId,
  county,
  feeling
}) => {

  db.collection("feedback").add({
    id,
    city,
    county,
    feelings: [{
      feeling,
      date: new Date().getTime()
    }]
  })
    .then(() => {
      setTimeout(() => {
        resetButton();
        showSuccessMessage(true);
      }, 1000);
      localStorage.setItem("feedback-city-id", cityId);
    })
    .catch((error) => {
      console.error(error);

      setTimeout(() => {
        resetButton();
        $('.network-error-filling-feedback').css('display', 'block');
        showSuccessMessage(false);
      }, 1000);

      ga('send', {
        hitType: 'event',
        eventCategory: 'FeedbackFailedOnFirestore',
        eventAction: 'Write',
        eventLabel: 'Failed to write feedback to DB'
      });
    });
};

const getCounty = (cityId) => {
  const cityIdAsInt = parseInt(cityId);
  return CITIES.find((city) => city.id === cityIdAsInt).county;
};

