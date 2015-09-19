'use strict';

/**
 * @ngdoc directive
 * @name repertorioApp.directive:footerBlock
 * @description
 * # footerBlock
 */
angular.module('repertorioApp')
  .directive('searchBox', function () {
    return {
	    templateUrl: 'views/search-box.html',
	    restrict: 'E',
	    link: function postLink(scope, element, attrs) {
	      	$('.close-search').on('click', function(){
	      		$('#search-box').fadeOut();
	      	});
	    }
	  };
  });
