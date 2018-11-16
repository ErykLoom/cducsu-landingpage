(function($) {

  var slider = $('.landingpage-slider__slider');
  var currentSlide = 1;

  slider.on('initial', function () {
    $('#slide-current').text(currentSlide);
  });

  slider
    .slick({

    prevArrow: '',
    nextArrow: '#pfeil-next',
    draggable: false,
    autoPlay: true,
  });

})(jQuery);