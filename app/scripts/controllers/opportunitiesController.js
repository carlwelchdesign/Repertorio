'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:OpportunitiesCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('OpportunitiesCtrl', function ($scope, $rootScope, $location, PageLoader, $filter) {

	$rootScope.page_id = 194;
	PageLoader.getPage($rootScope.page_id, function(data) {
	    $rootScope.pageData = data;
	});

	$scope.goToPage = function(loc) {
	    console.log(loc);
	    $location.path(loc);
	};
	$scope.getImage = function(img_id) {
		var result = $filter('filter')($rootScope.pageData.attachments, {id:img_id})[0];
  		return result.url;
  	};
});
