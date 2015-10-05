'use strict';

/**
* @ngdoc function
* @name repertorioApp.controller:PerformancesCtrl
* @description
* # ContactCtrl
* Controller of the repertorioApp
*/


angular.module('repertorioApp').controller('PerformancesCtrl', function ($http, $rootScope, $scope, $routeParams, $location, $window, $filter) {

  // pull the json from WordPress
  $rootScope.page_id = 299;
  PageLoader.getPage($rootScope.page_id, function(data) {
      $rootScope.pageData = data;
      console.log($rootScope.pageData);
  });

  function buildCalendarDates(){
    extractDates($rootScope.events);
  };

  //buildCalendarDates();

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


  function extractDates(d){
    
    var today = new Date();
    //today = moment(today).format('MM/DD/YY')+' 1:00AM';
	today = moment(today).format('YY/MM/DD')+' 1:00AM';

    var showDates = [];
    var i = d.length;

    for ( var i in d) {
      var thisEvent = d[i];
      var eventname = thisEvent.name;
      if(thisEvent.name!=='Gift Certificates' || thisEvent.name!=='Comboticket'){
        var h = thisEvent.instances.length;
        for ( var h in thisEvent.instances) {
          var thisInstance = thisEvent.instances[h]
          var showdate = moment(new Date(thisInstance.name));
		  //var shortDate = showdate.format('MM/DD/YY') + " " + showdate.format('h:mmA');
          var shortDate = showdate.format('YY/MM/DD') + " " + showdate.format('h:mmA');
		  var displayDate = showdate.format('MM/DD/YY') + " " + showdate.format('h:mmA');
          if(shortDate>today){
            var obj = { 
              name: eventname,
              displayDate: displayDate,
			  shortDate: shortDate,
              longDate: showdate,
              purchaseUrl: thisInstance.purchaseUrl
            };
            showDates.push(obj);

            var newdate = new Date(showdate);
            var time = showdate.format('hh:mmA');

            var url = thisInstance.purchaseUrl;
            var id = url.substr(url.lastIndexOf('/') + 1);
            id = url.substr(url.lastIndexOf('#') + 1);
            var purchaseUrl = '#/purchase/'+id;

            $("#jqxWidget").jqxCalendar('addSpecialDate', newdate, '', '<a href="'+purchaseUrl+'">'+eventname+'<br/>'+time+'</a>');
          }
        }
      }
      $("#jqxWidget").jqxCalendar({ enableTooltips: true});

    }
    $("#jqxWidget").jqxCalendar({ width: 460, height: 400, titleHeight: 30, enableTooltips: true, enableWeekend: true});

    $scope.showDates = showDates;
    //$('.jqx-tooltip').jqxTooltip({ showArrow: true, position: 'top' });

  }

  $scope.setPurchaseUrl = function(pu){
    var url = pu;
    var id = url.substr(url.lastIndexOf('/') + 1);
    id = url.substr(url.lastIndexOf('#') + 1);
    goToPurchase(id);
  }

  $scope.getPurchaseUrl = function(pu){
    var url = pu;
    var id = url.substr(url.lastIndexOf('/') + 1);
    id = url.substr(url.lastIndexOf('#') + 1);
    return 'purchase/'+id;
  }

  function goToPurchase(id) {
    //console.log(id);
    $location.path('purchase/'+id);
  };

  $scope.purchase = function(pu) {
    // console.log(loc);
    // $window.open(loc, '_blank');
    var url = pu;
    var id = url.substr(url.lastIndexOf('/') + 1);
    id = url.substr(url.lastIndexOf('#') + 1);
    goToPurchase(id);
  };
  $scope.goToEvent = function(loc) {
    console.log(loc);
    $location.path('event/'+loc);
  };
  $scope.goToPage = function(loc) {
    console.log(loc);
    $location.path(loc);
  };

  console.log('lang: '+$rootScope.lang);

});