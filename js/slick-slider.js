(function($) {

  var slider = $('.landingpage-slider');

  slider
    .on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.landingpage-slider__current').text(i + ' // ' + slick.slideCount);
      console.log(slick.slideCount);
    });

  slider
    .find('.landingpage-slider__slider')
    .slick({
      prevArrow: '',
      nextArrow: '#pfeil-next',
      draggable: false,
      autoPlay: true,
      dots: true,
    });

})(jQuery);