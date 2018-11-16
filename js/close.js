(function($) {

  var closeX = $('.footer-close-x');
  var closeBtn = $('.form__submit-sticky');

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