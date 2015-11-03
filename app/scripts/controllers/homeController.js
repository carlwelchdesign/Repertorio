'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:HomeCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('HomeCtrl', function ($scope, $location, $rootScope, $filter, PageLoader) {

	$rootScope.page_id = 258;
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
		if(img_id){
			var result = $filter('filter')($rootScope.pageData.attachments, {id:img_id})[0];
			console.log(result.url);
			return result.url;
		}
	};

});
