'use strict';

/**
 * @ngdoc service
 * @name repertorioApp.PatronData
 * @description
 * # PatronData
 * Factory in the repertorioApp.
 */
angular.module('repertorioApp')
  .factory('PatronData', function ($http, $cacheFactory, $rootScope) {
    // Service logic
    // ...

    
    //var url = 'data/PatronTicket__PublicApiEventList.json';
	var url = 'http://jsonp.afeld.me/?url=https://repertorio.secure.force.com/ticket/PatronTicket__PublicApiEventList';
    var dataCache = $cacheFactory.get('dataCache');
    var result;
      return {

          init : function(){
            $http.get(url)
                 .then(function(res){
                     result = JSON.stringify(res);
                     result = JSON.parse(result);
                     $rootScope.events = res.data.events;
                     return res.data.events;      
                  });
          },
          qdata : function(callback) {
              return result;
          },
          fetchData : function(callback) {
              result = $http.get(url).success(callback, {cache: dataCache});
              result = JSON.stringify(result);
              result = JSON.parse(result);
              //console.log(result.events);
              return result.events;
          },
          getPatronJson: function(callback){
            var url = 'https://repertorio.secure.force.com/ticket/PatronTicket__PublicApiEventList?callback=JSON_CALLBACK';
            $http.jsonp(url).then(function(data) {
              data = JSON.stringify(data);
              data = JSON.parse(data);
              return data.events;
            });


            function jsonp_callback(data) {
                // returning from async callbacks is (generally) meaningless
                console.log(data.found);
            }

          }
      };
  });
