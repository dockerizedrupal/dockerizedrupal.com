(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.public = {
    attach: function (context, settings) {
      $(window).load(function() {
        //$('.flexslider').flexslider({
        //  animation: 'fade',
        //  animationLoop: false,
        //  slideshow: false,
        //  directionNav: true,
        //  controlNav: false,
        //  before: function(slider) {
        //    slider.find('.loading').remove();
        //  }
        //});

        $('.wizard-item .column').matchHeight();
      });

      //$(function() {
      //  $('.loader').each(function() {
      //    $(this).find('.rectangle-1')[0].animate([
      //      {
      //        'opacity': 0.2,
      //        'height': '10px',
      //        'top': '10px'
      //      },
      //      { 'opacity': 1.0,
      //        'height': '20px',
      //        'top': '5px'
      //      },
      //      { 'opacity': 0.2,
      //        'height': '10px',
      //        'top': '10px'
      //      }
      //    ], {
      //      direction: 'alternate',
      //      duration: 600,
      //      iterations: Infinity
      //    });
      //
      //    $(this).find('.rectangle-2')[0].animate([
      //      {
      //        'opacity': 0.2,
      //        'height': '10px',
      //        'top': '10px'
      //      },
      //      { 'opacity': 1.0,
      //        'height': '20px',
      //        'top': '5px'
      //      },
      //      { 'opacity': 0.2,
      //        'height': '10px',
      //        'top': '10px'
      //      }
      //    ], {
      //      direction: 'alternate',
      //      duration: 600,
      //      iterations: Infinity,
      //      delay: 150
      //    });
      //
      //    $(this).find('.rectangle-3')[0].animate([
      //      {
      //        'opacity': 0.2,
      //        'height': '10px',
      //        'top': '10px'
      //      },
      //      { 'opacity': 1.0,
      //        'height': '20px',
      //        'top': '5px'
      //      },
      //      { 'opacity': 0.2,
      //        'height': '10px',
      //        'top': '10px'
      //      }
      //    ], {
      //      direction: 'alternate',
      //      duration: 600,
      //      iterations: Infinity,
      //      delay: 300
      //    });
      //  });
      //});
    }
  };

})(jQuery, Drupal);
