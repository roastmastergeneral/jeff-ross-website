$(document).ready(function() {
  $('.b-main-menu-trigger').click(function() {
    $('.b-main-nav').addClass('m-active');
  });

  $('.e-menu-item').click(function() {
    $('.b-main-nav').removeClass('m-active');
  });

});

$('#overlay').click(function() {
  $(this).removeClass('m-active');
  $('.b-filters').removeClass('m-active');
});