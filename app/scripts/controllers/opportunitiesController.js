'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:OpportunitiesCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('OpportunitiesCtrl', function ($scope, $rootScope, $location, PageLoader) {

	$rootScope.page_id = 194;
	PageLoader.getPage($rootScope.page_id, function(data) {
	    $rootScope.pageData = data;
	});

	$scope.goToPage = function(loc) {
	    console.log(loc);
	    $location.path(loc);
	};
});
