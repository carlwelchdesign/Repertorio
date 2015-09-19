'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:ToursCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('ToursCtrl', function ($scope, $rootScope, PageLoader, $location) {

	$rootScope.page_id = 10;
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
});
