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
