'use strict';

/**
 * @ngdoc directive
 * @name repertorioApp.directive:footerBlock
 * @description
 * # footerBlock
 */
angular.module('repertorioApp')
  .directive('searchButton', function () {
    return {
	    // templateUrl: 'views/footerblock.html',
	    restrict: 'A',
	    link: function postLink(scope, element, attrs) {
	      element.on('click', function(){
	      	$('#search-box').fadeIn();
	      })
	    }
	  };
  });
