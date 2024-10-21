$(document).ready(function() {

    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 10000,
      centerMode: true, // Выравнивание первого слайда по центру
      arrows: false, 
      responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.2,
                dots: false,
                centerMode: false,
                infinite: false,
                initialSlide: 0
            }
          }
      ]
    });

    $('.slider_gallery').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 10000,
      centerMode: false,
      infinite: false, // Слайдер не будет бесконечным
      initialSlide: 0,  // Выравнивание первого слайда по центру
      arrows: false, 
      responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.2,
                dots: false,
                centerMode: false,
                infinite: false,
                initialSlide: 0
            }
          }
      ]
    });


});