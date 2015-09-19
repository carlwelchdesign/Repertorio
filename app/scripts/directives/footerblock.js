'use strict';

/**
 * @ngdoc directive
 * @name repertorioApp.directive:footerBlock
 * @description
 * # footerBlock
 */
angular.module('repertorioApp')
  .directive('footerBlock', function () {
    return {
	    templateUrl: 'views/footerblock.html',
	    restrict: 'E',
	    link: function postLink(scope, element, attrs) {
	      
	    }
	  };
  });
