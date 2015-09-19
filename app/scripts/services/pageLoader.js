'use strict';

/**
 * @ngdoc service
 * @name repertorioApp.PatronData
 * @description
 * # PatronData
 * Factory in the repertorioApp.
 */
angular.module('repertorioApp')
  .factory('PageLoader', function ($http, $rootScope) {

  	return {
		getPage: function(id, callback){
			var url = 'http://104.131.7.53/admin/?json=get_page&id='+id+'&lang='+$rootScope.lang+'&callback=JSON_CALLBACK';
			$http.jsonp(url).then(function(data) {
				console.log(data.data.page);
				callback(data.data.page);
			});
		},
		getPosts: function(){
			var url = 'http://104.131.7.53/admin/?json=get_posts&lang='+$rootScope.lang+'&callback=JSON_CALLBACK';
			$http.jsonp(url).then(function(data) {
				console.log(data.data.page);
				callback(data.data.page);
			});
		}
	}
});
