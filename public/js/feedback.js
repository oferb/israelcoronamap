
$(document).ready(() => {
  $('.report-pop-up-click').click(showFeedbackPopup);

  $('#report-close-x').click(() => {
    $('#report-pop-up').fadeOut('fast');
    deleteQueryParam('feedback');
  });

   $('#health_habits_survey').click(() => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'ClickOnSurvey',
      eventAction: 'Click',
      eventLabel: 'health_habits_survey'
    });
  });

  $('#behavior_survey').click(() => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'ClickOnSurvey',
      eventAction: 'Click',
      eventLabel: 'behavior survey'
    });
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
};

$('#submit-feedback-button').click(async () => {

  ga('send', {
    hitType: 'event',
    eventCategory: 'SendFeedback',
    eventAction: 'Click',
    eventLabel: 'User send feedback'
  });

  cleanErrors();
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
});

if (getQueryParam('feedback') === 'true') {
  showFeedbackPopup();
};