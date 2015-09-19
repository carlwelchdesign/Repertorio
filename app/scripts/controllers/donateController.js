'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:DonateCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('DonateCtrl', function ($scope, $rootScope, PageLoader) {

	$rootScope.page_id = 130;
	PageLoader.getPage($rootScope.page_id, function(data) {
	    $rootScope.pageData = data;
	});
});
