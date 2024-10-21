$(document).ready(function(){
 
  $(".burger_btn").on("click", function() {
      $(".burger_btn").toggleClass("burger_icon_close");
      $(".nav_mobile").toggleClass("nav_mobile_active");
      $(".logo").toggleClass("logo_close");
      $("body").toggleClass("body_scroll");
  });

  $(".nav_mobile .nav_text_header").on("click", function() {
      $(".burger_btn").removeClass("burger_icon_close");
      $(".nav_mobile").removeClass("nav_mobile_active");
      $(".logo").removeClass("logo_close");
      $("body").removeClass("body_scroll");
  });

  $('.btn_href_2, .href_scroll').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(target).offset().top - 50
      }, 500);
  });

  $('.btn_href_4').click(function(event) {
    event.preventDefault();
    $('.text_rules_2').slideToggle();
    var $btn = $(this);
    $btn.text($btn.text() === 'Посмотреть правила' ? 'Свернуть' : 'Посмотреть правила');
  });

});