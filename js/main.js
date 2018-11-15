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

  $('.landingpage-slider__slider').slick();

})(jQuery);