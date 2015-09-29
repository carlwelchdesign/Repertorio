'use strict';

/**
* @ngdoc function
* @name repertorioApp.controller:EventCtrl
* @description
* # ContactCtrl
* Controller of the repertorioApp
*/


angular.module('repertorioApp').controller('EventCtrl', function ($http, $timeout, $rootScope, $scope, $routeParams, $location, $window, $filter, PatronData) {
	$('#search-box').fadeOut();
	//$rootScope.events = PatronData.init();
	function buildCalendarDates(){
		var theEvent = [];
		theEvent = ($filter('filter')($rootScope.events, {id: $routeParams.id}));
		console.log(theEvent[0]);
		$scope.event = theEvent[0];
		console.log($scope.event.id);
		getCalendarDates($scope.event);
	};

	


		// $scope.$on('$viewContentLoaded', function(){
	 //    	buildCalendarDates();
	 //  	});
  	// $scope.$on('$viewContentLoaded', function(event) {
   //    $timeout(function() {
   //      buildCalendarDates();
   //    },0);
   //  });
    var url = 'data/PatronTicket__PublicApiEventList.json';
    var result;
	$http.get(url)
	     .then(function(res){
	         console.log('init');
	         result = JSON.stringify(res);
	         result = JSON.parse(result);
	         console.log(res.data.events);
	         $rootScope.events = res.data.events;
	         console.log('init: '+$rootScope.events);
	         //return res.data.events; 
	         buildCalendarDates();     
	      });


  	$scope.setPurchaseUrl = function(pu){
  		var url = pu;
		var id = url.substr(url.lastIndexOf('/') + 1);
		id = url.substr(url.lastIndexOf('#') + 1);
		goToPurchase(id);
  	}

  	 function goToPurchase(id) {
	    console.log(id);
	    $location.path('purchase/'+id);
	  };

	function getCalendarDates(d){
		console.log('getCalendarDates: '+d);
		var today = new Date();
		
		console.log('d.instances.length equals: '+d.instances.length) //how many show times in the array?
		for (var h = d.instances.length - 1; h >= 0; h--) { 
			var showdate = moment(new Date(d.instances[h].name));			
			var newdate = new Date(showdate);
			var time = showdate.format('hh:mmA');
			console.log(newdate+' / '+today);

			if(newdate>today){
				var url = d.instances[h].purchaseUrl;
				var id = url.substr(url.lastIndexOf('/') + 1);
				id = url.substr(url.lastIndexOf('#') + 1);
				console.log(id);
				var purchaseUrl = '#/purchase/'+id;

				$("#eventWidget").jqxCalendar('addSpecialDate', newdate, '', '<a href="'+purchaseUrl+'">'+d.name+'<br/>'+time+'</a>');
				$("#eventWidget").jqxCalendar({ width: 460, height: 400, titleHeight: 30, enableTooltips: true, enableWeekend: true});
			}
			///console.log(x);
			//$("#jqxWidget").jqxCalendar('specialDate');
		}
		//$('.jqx-tooltip').jqxTooltip({ showArrow: true, position: 'top' });
	}


	$scope.purchase = function(loc) {
		console.log(loc);
		$window.open(loc, '_blank');
	};
	$scope.goToEvent = function(loc) {
		console.log(loc);
		$location.path('event/'+loc);
	};
	$scope.goToPage = function(loc) {
		console.log(loc);
		$location.path(loc);
	};
});











