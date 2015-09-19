'use strict';

/**
 * @ngdoc directive
 * @name repertorioApp.directive:pagePiling
 * @description
 * # pagePiling
 */
 angular.module('repertorioApp')
	 .directive('pagePiling', function () {
	 	return {
	 		restrict: 'C',
	 		link: function postLink(scope, element, attrs) {
	        $('#scroll-panel').scroll(function() {
				if($('#scroll-panel').scrollTop()===0){
					$.fn.pagepiling.moveTo(3);
				}
			});
	        element.pagepiling({
	        	setAllowScrolling:true,
	        	normalScrollElements: '.pp-scrollable',
	        	anchors: [],
	        	navigation: {
	        		'bulletsColor': '#fff',
	        		'position': 'right'
	        	},
	        	onLeave: function(index, nextIndex, direction){
		            //after leaving section 2
		            if(index === 3 && direction ==='down'){
		                $('.header-nav').animate({top:-100}, 800, function() {});
		            	$('#pp-nav').animate({right:-100}, 800, function() {});
        				$('#pp-arrow').animate({bottom:-100}, 800, function() {});
		            } else if(index === 4 && direction === 'up'){
		                $('.header-nav').animate({top:0}, 800, function() {});
		                $('#pp-nav').animate({right:17}, 800, function() {});
        				$('#pp-arrow').animate({bottom:20}, 800, function() {});
		            }
		        }
	        });
	    }
	};
});