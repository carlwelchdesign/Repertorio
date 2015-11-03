'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:EducationCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('EducationCtrl', function ($scope, $rootScope, PageLoader, $location, $filter) {

	$rootScope.page_id = 21;
	PageLoader.getPage($rootScope.page_id, function(data) {
	    $rootScope.pageData = data;
	});
	
	$scope.getImage = function(img_id) {
		var result = $filter('filter')($rootScope.pageData.attachments, {id:img_id})[0];
  		return result.url;
  	};
	
	function vimeoTrusted($scope, $sce) {
		$scope.vimeoUrl = $sce.trustAsResourceUrl('http://player.vimeo.com/video/'+$scope.v);
		console.log('Vimeo url is: '+vimeoUrl);
	}
});