/* eslint-disable no-undef */
$(document).ready(() => {

  // don't hide pop up when click on this items
  $(".hamburger").click(e => {
    e.stopPropagation();
  });

  // on body click anywhere - hide side bar pop-up
  $("body").click(() => {
    $('.side-bar').fadeOut('fast');
    $('#overlay').removeClass('overlay');
    $( '.hamburger' ).removeClass( "is-active" );

  });

  // side-bar menu open
  $('.hamburger').click(() => {
    $('.side-bar').fadeToggle(50);
    $( this ).toggleClass( "is-active" );
    $('#overlay').toggleClass('overlay');
  });

   // jobs report pop-up
    $('.jobs-pop-up-click').click(function () {

      ga('send', {
        hitType: 'event',
        eventCategory: 'jobsClick',
        eventAction: 'Click',
        eventLabel: 'Open jobs Pop-Up'
      });

      $('#jobs-pop-up').fadeIn("fast");
    });
    
      // jobs-close-x icon
    $('#jobs-close-x').click(function () {
      $('#jobs-pop-up').fadeOut('fast');
    });

     $('#keepondoing_careers').click(() => {
      ga('send', {
        hitType: 'event',
        eventCategory: 'ClickOnKeepondoingCareers',
        eventAction: 'Click',
        eventLabel: 'Open keepondoing careers link'
      });
    });

    $('#techjobscorona_careers').click(() => {
      ga('send', {
        hitType: 'event',
        eventCategory: 'ClickOnTechjobscoronaCareers',
        eventAction: 'Click',
        eventLabel: 'Open Techjobscorona careers link'
      });
    });

    $('#facebook_group_careers').click(() => {
      ga('send', {
        hitType: 'event',
        eventCategory: 'ClickOnFacebookGroupCareers',
        eventAction: 'Click',
        eventLabel: 'Open facebook group careers link'
      });
    });

      $('#rouths').click(() => {
      ga('send', {
        hitType: 'event',
        eventCategory: 'ClickOnRouths',
        eventAction: 'Click',
        eventLabel: 'Open rouths page'
      });
    });




  // terms-close-x icon
  $('#terms-close-x').click(() => {
    $('#terms-of-use-pop-up').fadeOut('fast');
  });


  // open terms of use pop-up
  $('.terms-of-use-pop-up-click').click(() => {
    $('#terms-of-use-pop-up').fadeIn("fast");
  });


  // open embed pop-up
  $('.code-embed-pop-up-click').click(() => {

    $('#embedCoronaMap').modal('show');
    $('#hamburgerOnMainScreen').modal('hide');

  });

  $('.update-pop-up-click').click(function () {

    ga('send', {
      hitType: 'event',
      eventCategory: 'SickPeoplePopUp',
      eventAction: 'Click',
      eventLabel: 'Open Sick People Pop-Up'
    });
    $('#update').attr("dir", langDirection);
    $('#update').modal('show');

  });



  // open map reader pop-up
  $('.map-reader-pop-up-click').click(() => {

    $('#map-reader-pop-up').fadeIn("fast");

  });

  // map-reader-close-x icon
  $('#map-reader-close-x').click(() => {
    $('#map-reader-pop-up').fadeOut('fast');
  });

  if (typeof zoomToLocation !== 'undefined') {
    $('#zoom-to-location-button').click(zoomToLocation);
  }

  // open language pop-up
  $('.language-click').click(function () {

    ga('send', {
      hitType: 'event',
      eventCategory: 'SwitchLanguage',
      eventAction: 'Click',
      eventLabel: 'Open Language Pop-Up'
    });

    $('#language-popup').modal('toggle');
  });

  $('#show-sick-people-track').click(() => {
    const showTracksButton = $('#show-sick-people-track');
    showTracksButton.toggleClass('selected');
    const isSelected = showTracksButton.hasClass('selected');
    $('#show-filter-text-sick-people').text(isSelected ? 'הסתר: ' : 'הצג: ');
    toggleSickTracksOnMap({shouldShowTracks: isSelected});

    const eventCategory = isSelected ? 'Show People Tracks' : 'Hide People Tracks';

    ga('send', {
      hitType: 'event',
      eventCategory: eventCategory,
      eventAction: 'Click',
      eventLabel: 'Sick people track filter'
    });

  });

  $('#show-top-corona-cities').click(() => {
    const citiesButton = $('#show-top-corona-cities');
    citiesButton.toggleClass('selected');
    const isSelected = citiesButton.hasClass('selected');
    $('#show-filter-text-top-cities').text(isSelected ? 'הסתר: ' : 'הצג: ');
    toggleCitiesOnMap({shouldShowCities: citiesButton.hasClass('selected')});

    const eventCategory = isSelected ? 'Show Top Cities' : 'Hide Top Cities';

    ga('send', {
      hitType: 'event',
      eventCategory: eventCategory,
      eventAction: 'Click',
      eventLabel: 'Sick people track filter'
    });
  });
});



/*! track-focus v 1.0.0 | Author: Jeremy Fields [jeremy.fields@vget.com], 2015 | License: MIT */
// inspired by: http://irama.org/pkg/keyboard-focus-0.3/jquery.keyboard-focus.js

((body) => {

  let usingMouse;

  let preFocus = (event) => {
    usingMouse = (event.type === 'mousedown');
  };

  let addFocus = (event) => {
    if (usingMouse)
      event.target.classList.add('focus--mouse');
  };

  let removeFocus = (event) => {
    event.target.classList.remove('focus--mouse');
  };

  let bindEvents = () => {
    body.addEventListener('keydown', preFocus);
    body.addEventListener('mousedown', preFocus);
    body.addEventListener('focusin', addFocus);
    body.addEventListener('focusout', removeFocus);
  };

  bindEvents();

})(document.body);


