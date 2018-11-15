(function($) {

  var close = $('#footer-close');

  close
    .click(function() {
      $('.footer-sticky').css({
        'display': 'none',
      })
  });

})(jQuery);
