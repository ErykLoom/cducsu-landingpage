(function($) {

  var accordion = $('.accordion');
  var accordionItems = accordion.find('.accordion__item');

  accordion
    .find('.accordion__content')
    .slideUp('fast');

  accordion
    .find('.accordion__label')
    .click(function() {
      var thisParent = $(this).parent();
      var thisContent = thisParent.find('.accordion__content');
      var isActive = thisParent.hasClass('accordion__item--active');

      accordionItems.removeClass('accordion__item--active');

      accordion
        .find('.accordion__content')
        .slideUp('fast');

      if (!isActive) {
        thisParent.addClass('accordion__item--active');
        thisContent.slideDown('fast');
      }
    });

})(jQuery);

(function($) {

  var closeX = $('#footer-close-x');
  var closeBtn = $('#footer-close-btn');

  closeX
    .click(function() {
      $('.footer-sticky').css({
        'display': 'none',
      })
  });

  closeBtn
    .click(function() {
      $('.footer-sticky').css({
        'display': 'none',
      })
    });

})(jQuery);


(function($) {

  var slider = $('.landingpage-slider__slider');
  var currentSlide = 1;

  slider
    .on('init', function() {
    $('#slide-current').text(currentSlide);
  });

  slider
    .on('afterChange', function () {
      currentSlide++;
      $('#slide-current').text(currentSlide);
    });
  
  slider
    .slick({

      prevArrow: '',
      nextArrow: '#pfeil-next',
      draggable: false,
      autoPlay: true,
      dots: true,
      dotsClass: 'custom_paging',

  });

})(jQuery);