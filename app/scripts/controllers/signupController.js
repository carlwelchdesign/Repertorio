'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:EducationCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('SignupCtrl', function ($scope, $rootScope) {

	if ($rootScope.lang === 'en'){
		$scope.stayintouch = 'Stay in Touch';
		$scope.recievedetails = 'Receive the latest details, event info, reviews, and more';
		$scope.signup = 'Sign Up';
	} else {
		$scope.stayintouch = 'Manténgase en contacto';
		$scope.recievedetails = 'Reciba nuestras últimas noticias, eventos, reseñas y más.';
		$scope.signup = 'Inscríbase';
	}
	
});

