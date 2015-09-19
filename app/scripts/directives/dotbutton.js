'use strict';

/**
 * @ngdoc directive
 * @name repertorioApp.directive:dotButton
 * @description
 * # dotButton
 */
angular.module('repertorioApp')
  .directive('ppFunctions', function () {
    return {
      //template: '<div></div>',
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the dotButton directive');
        element.on('click', function(){
        	$.fn.pagepiling.moveTo(attrs.section);
        	if (attrs.section=='4'){
            $('.header-nav').animate({top:-100}, 800, function() {});
            $('#pp-nav').animate({right:-100}, 800, function() {});
            $('#pp-arrow').animate({bottom:-100}, 800, function() {});
        	}
        	if (attrs.section!='4'){
        		$('.header-nav').animate({top:0}, 800, function() {});
            $('#pp-nav').animate({right:17}, 800, function() {});
				    $('#pp-arrow').animate({bottom:0}, 800, function() {});
        	}
        })
      }
    };
  });
