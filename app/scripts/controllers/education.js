'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:EducationCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('EducationCtrl', function ($scope, $rootScope, PageLoader) {

	$rootScope.page_id = 21;
	PageLoader.getPage($rootScope.page_id, function(data) {
	    $rootScope.pageData = data;
	});
	
});
