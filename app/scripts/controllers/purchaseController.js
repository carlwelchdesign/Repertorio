'use strict';

/**
* @ngdoc function
* @name repertorioApp.controller:PurchaseCtrl
* @description
* # ContactCtrl
* Controller of the repertorioApp
*/


angular.module('repertorioApp').controller('PurchaseCtrl', function ($scope, $routeParams, $sce) {
	$scope.purchaseUrl = 'https://repertorio.secure.force.com/ticket/#'+$routeParams.id;
	$scope.trustSrc = function(src) {
	    return $sce.trustAsResourceUrl(src);
	  }
});