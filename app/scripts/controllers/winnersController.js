'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:WinnersCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('WinnersCtrl', function ($scope, $rootScope, PageLoader, $location, $filter) {

	$rootScope.page_id = 976;
	PageLoader.getPage($rootScope.page_id, function(data) {
	    $rootScope.pageData = data;
	});


	$scope.getImage = function(img_id) {
		var result = $filter('filter')($rootScope.pageData.attachments, {id:img_id})[0];
  		return result.url;
  	};
});
