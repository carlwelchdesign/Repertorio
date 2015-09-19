'use strict';

/**
 * 
 */
$(function() {
  var $about = $('#about');
  var $aboutSubnav = $('.about-subnav');

  var mouseoutDelay = 128;
  var mouseOutOfAboutSubnav = true;
  var topActive = '-7px';
  var topInactive = '-24px';
	
  function showSubnav() {
    $aboutSubnav.css('display', 'block').stop().animate({
      'opacity': 1,
      'marginTop': topActive
    });
  }

  function hideSubnav() {
    $aboutSubnav.stop().animate({
      'opacity': 0,
      'marginTop': topInactive
    }, function() {
      $aboutSubnav.css('display', 'none');
    });
  }

  function init() {
    $about
      .bind('click touch tap', function(e) {
        // prevent default for about click but not for its children!
        if (! $(e.target).parent().parent().hasClass('about-subnav')) {
          e.preventDefault(); 
        }

        if (mouseOutOfAboutSubnav) {
          mouseOutOfAboutSubnav = false;
          showSubnav();
        } else {
          mouseOutOfAboutSubnav = true;
          hideSubnav();
        }
      })
      .bind('mouseover', function() {
        mouseOutOfAboutSubnav = false;
        showSubnav();
      })
      .bind('mouseout', function() {
        mouseOutOfAboutSubnav = true;

        setTimeout(function() {
          if (mouseOutOfAboutSubnav) {
            hideSubnav();
          }
        }, mouseoutDelay);
      });

    $aboutSubnav.css('marginTop', topInactive);
  }

  init();
});