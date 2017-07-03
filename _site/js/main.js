$(function() {
  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $('.hamburger').toggleClass('is-active');
    $('.nav').toggleClass('visible');
  });
});
