(function ($) {
  "use strict";
  var header = $('.menu-sticky');
  var win = $(window);

  win.on('scroll', function () {
    var scroll = win.scrollTop();
    if (scroll < 1) {
      header.removeClass("sticky");
    } else {
      header.addClass("sticky");
    }

    $("section").each(function () {
      var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
      if (scroll >= elementTop) {
        $(this).addClass('loaded');
      }
    });

  });

  var navclose = $('#onepage-menu');
  if (navclose.length) {
    $(".nav-menu li a").on("click", function () {
      if ($(".showhide").is(":visible")) {
        $(".showhide").trigger("click");
      }
    });

    if ($.fn.onePageNav) {
      $(".nav-menu").onePageNav({
        currentClass: "current-menu-item"
      });
    }
  }

  if ($('.player').length) {
    $(".player").YTPlayer();
  }


  $(document).on('ready', function () {
    $("#loading").delay(1000).fadeOut(1000);
  });


  $(window).on('load', function () {
    $("#loader").delay(1000).fadeOut(500);
  })

  var totop = $('#scrollUp');
  win.on('scroll', function () {
    if (win.scrollTop() > 150) {
      totop.fadeIn();
    } else {
      totop.fadeOut();
    }
  });
  totop.on('click', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 500)
  });


})(jQuery);
