angular.module('repertorioApp').controller('SearchController', function ($scope, $rootScope,PatronData) {
	//$scope.events = $rootScope.events;
	//console.log('SearchController: '+$scope.events);
	PatronData.fetchData(function(results) {
		$scope.events = results.events;
	});

});