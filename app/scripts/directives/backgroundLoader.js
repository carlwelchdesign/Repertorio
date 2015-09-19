'use strict';
angular.module('repertorioApp').directive('bgLoader', function ($rootScope) {
	return {
		restrict: 'EAC',
		scope: {
            bgid: '='
        },
		link: function postLink(scope, element, attrs) {

            attrs.$observe('bgid', function(value) {
            	console.log('attrs: '+value);
           		for(var i=0; i < $rootScope.pageData.attachments.length; i++){
					console.log($rootScope.pageData.attachments[i].url);
		    		if($rootScope.pageData.attachments[i].id.toString() === value.toString()){
		    			console.log($rootScope.pageData.attachments[i].id);
		    			console.log($rootScope.pageData.attachments[i].url);
		    			element.css('background','url('+$rootScope.pageData.attachments[i].url+') center center/cover no-repeat');

		    		}
		    	}
         	});
		}
	};
});