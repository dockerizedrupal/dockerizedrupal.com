(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.public = {
    attach: function (context, settings) {
      $(window).load(function() {
        $('.wizard-item .column').matchHeight();
      });

      $(function() {
        $('body').fitVids();
      });
    }
  };

})(jQuery, Drupal);
