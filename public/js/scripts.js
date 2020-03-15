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

  $('#zoom-to-location-button').click(zoomToLocation);
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
