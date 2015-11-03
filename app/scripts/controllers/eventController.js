'use strict';

/**
* @ngdoc function
* @name repertorioApp.controller:EventCtrl
* @description
* # ContactCtrl
* Controller of the repertorioApp
*/


angular.module('repertorioApp').controller('EventCtrl', function (PageLoader, $http, $timeout, $rootScope, $scope, $routeParams, $location, $window, $filter, PatronData) {
	$('#search-box').fadeOut();
	//$rootScope.events = PatronData.init();
	function buildCalendarDates(){
		var theEvent = [];
		theEvent = ($filter('filter')($rootScope.events, {id: $routeParams.id}));
		$scope.event = theEvent[0];
		getCalendarDates($scope.event);
	};

	PageLoader.getPosts(function(data) {
		data = JSON.stringify(data);
	    data = JSON.parse(data);
		
		for (var i = data.length - 1; i >= 0; i--) {
			console.log(data[i].custom_fields);
			if(data[i].custom_fields.event_id[0]!==""){

				if(data[i].custom_fields.event_id[0].toString()==$routeParams.id.toString()){
					$rootScope.postData = data[i];
					
				}


			}
		};
	});

	
    //var url = 'data/PatronTicket__PublicApiEventList.json';
	var url = 'http://jsonp.afeld.me/?url=https://repertorio.secure.force.com/ticket/PatronTicket__PublicApiEventList';
    var result;
	$http.get(url)
	     .then(function(res){
	         result = JSON.stringify(res);
	         result = JSON.parse(result);
	         $rootScope.events = res.data.events;
	         buildCalendarDates();     
	      });


  	$scope.setPurchaseUrl = function(pu){
  		var url = pu;
		var id = url.substr(url.lastIndexOf('/') + 1);
		id = url.substr(url.lastIndexOf('#') + 1);
		goToPurchase(id);
  	}

  	 function goToPurchase(id) {
	    $location.path('purchase/'+id);
	  };

	function getCalendarDates(d){
		var today = new Date();
		
		console.log('d.instances.length equals: '+d.instances.length) //how many show times in the array?
		for (var h = d.instances.length - 1; h >= 0; h--) { 
			console.log('CAL: '+d.instances[h]);
			var showdate = moment(new Date(d.instances[h].name));			
			var newdate = new Date(showdate);
			var time = showdate.format('hh:mmA');

			if(newdate>today){
				var url = d.instances[h].purchaseUrl;
				var id = url.substr(url.lastIndexOf('/') + 1);
				id = url.substr(url.lastIndexOf('#') + 1);
				var purchaseUrl = '#/purchase/'+id;

				$("#eventWidget").jqxCalendar('addSpecialDate', newdate, '', '<a href="'+purchaseUrl+'">'+d.name+'<br/>'+time+'</a>');
				$("#eventWidget").jqxCalendar({ width: 460, height: 400, titleHeight: 30, enableTooltips: true, enableWeekend: true});
			}

		}
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
	$scope.getImage = function(img_id) {
		var result = $filter('filter')($rootScope.postData.attachments, {id:img_id})[0];
  		return result.url;
  	};
});











