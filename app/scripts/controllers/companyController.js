'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:ToursCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('CompanyCtrl', function ($scope, $rootScope, PageLoader, $location, $filter) {

	$rootScope.page_id = 293;
	PageLoader.getPage($rootScope.page_id, function(data) {
	    $rootScope.pageData = data;
	});

	$scope.purchase = function(loc) {
		console.log(loc);
		$window.open(loc, '_blank');
	};
	$scope.goToEvent = function(loc) {
		console.log(loc);
		$location.path('event/'+loc);
	};
	$scope.goToPage = function(loc) {
		console.log(loc);
		$location.path(loc);
	};
	$scope.getImage = function(img_id) {
		var result = $filter('filter')($rootScope.pageData.attachments, {id:img_id})[0];
  		return result.url;
  	};
});
