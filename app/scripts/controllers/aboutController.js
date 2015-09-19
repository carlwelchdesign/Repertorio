'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:AboutCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('AboutCtrl', function ($scope, $rootScope, PageLoader) {

	$rootScope.page_id = 32;
	PageLoader.getPage($rootScope.page_id, function(data) {
	    $rootScope.pageData = data;
	});
});
