'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:NavCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('NavCtrl', function ($scope, $rootScope) {

	if ($rootScope.lang === 'en'){
		$scope.performances = 'Performances & Tickets';
		$scope.tours = 'Tours';
		$scope.education = 'Education';
		$scope.opportunities = 'Opportunities';
		$scope.about = 'About';
		$scope.repertorio = 'Repertorio Español';
		$scope.administration = 'Administration';
		$scope.theater = 'Gramercy Arts Theatre';
		$scope.donate = 'Donate';
		$scope.contact = 'Contact';
		$('.lang').removeClass('lactive');
        $('#en').addClass('lactive');
	} else {
		$scope.performances = 'Producciones y boletos';
		$scope.tours = 'Giras';
		$scope.education = 'Educación';
		$scope.opportunities = 'Oportunidades';
		$scope.about = 'Sobre';
		$scope.repertorio = 'Repertorio Español';
		$scope.administration = 'Administración';
		$scope.theater = 'Gramercy Arts Theatre';
		$scope.donate = 'Donar';
		$scope.contact = 'Contacto';
		$('.lang').removeClass('lactive');
        $('#es').addClass('lactive');
	}

});