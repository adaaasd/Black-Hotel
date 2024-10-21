$(document).ready(function() {
  $('.play-button').on('click', function() {
      $('video').get(0).play();
      $(this).hide(); // Скрыть кнопку после нажатия
  });
});