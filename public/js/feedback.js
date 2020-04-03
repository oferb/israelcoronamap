
$(document).ready(() => {
  $('.report-pop-up-click').click(showFeedbackPopup);

  $('#report-close-x').click(() => {
    $('#report-pop-up').fadeOut('fast');
    deleteQueryParam('feedback');
  });

  $('#parenthood_survey').click(() => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'ClickOnSurvey',
      eventAction: 'Click',
      eventLabel: 'Parenthood survey'
    });
  });

  $('#crisis_survey').click(() => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'ClickOnSurvey',
      eventAction: 'Click',
      eventLabel: 'Crisis survey'
    });
  });

  $('#hope_survey').click(() => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'ClickOnSurvey',
      eventAction: 'Click',
      eventLabel: 'Hope survey'
    });
  });

  $('#close-feedback-popup, #go-back-to-main-screen').click(() => {
    $('#report-pop-up').fadeOut('fast');
    deleteQueryParam('feedback');
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
  setQueryParam('feedback', 'true');
  // clean previous success message
  showSuccessMessage(false);
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
    feedbackError.push('עיר');
  }

  if (!selectedFeeling.length) {
    feedbackError.push('הרגשה');
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
  $('.form-success-message').css('display', show ? 'block' : 'none');
  $('#submit-feedback-button').css('display', show ? 'none' : 'inline-block');
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
    feeling,
    date: new Date().getTime()
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

if (getQueryParam('feedback') === 'true') {
  showFeedbackPopup();
};