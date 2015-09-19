'use strict';

/**
 * @ngdoc service
 * @name repertorioApp.PatronData
 * @description
 * # PatronData
 * Factory in the repertorioApp.
 */
angular.module('repertorioApp')
  .factory('PatronData', function ($http, $cacheFactory) {
    // Service logic
    // ...

    
    var url = 'data/PatronTicket__PublicApiEventList.json';
    var dataCache = $cacheFactory.get('dataCache');
    var result;
      return {
          qdata : function(callback) {
              return result;
          },
          fetchData : function(callback) {
              console.log('fecthData');
              result = $http.get(url).success(callback, {cache: dataCache});
              result = JSON.stringify(result);
              result = JSON.parse(result);
              return result.events;
          },
          getPatronJson: function(callback){
            var url = 'https://repertorio.secure.force.com/ticket/PatronTicket__PublicApiEventList?callback=JSON_CALLBACK';
            // $http.jsonp(url);

            // function JSON_CALLBACK(data) {
            //       console.log(data.found);                  
            //       result = JSON.stringify(data);
            //       result = JSON.parse(result);
            //       console.log('getPatronJson: '+result.events)
            //       return result.events;
            //   }

            $http({method: 'JSONP', url: url}).
                    success(function(data, status) {
                      // $scope.status = status;
                      // $scope.data = data;
                      console.log(status);
                    }).
                    error(function(data, status) {
                      // $scope.data = data || "Request failed";
                      // $scope.status = status;
                      console.log(status);
                  });


         
          

          }
      };
  });
