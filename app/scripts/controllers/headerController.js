'use strict';

angular.module('repertorioApp').controller('HeaderController', function ($routeParams, $rootScope, $scope, $location, $localStorage, PageLoader, $window) {
    $scope.isActive = function (viewLocation) { 

    	var path = $location.path();
        var res = path.split('/');
        var purchasePath = res[1];
        if (purchasePath==='purchase' || purchasePath==='signup'){
            $('.header-nav').css('background-color','rgba(0, 0, 0, 1)');
        }else{
            $('.header-nav').css('background-color','rgba(0, 0, 0, 0.5)');
        }

    	if(path==='/'){
    		$('html, body').css('overflow','hidden');
	    }else{
	    	$('html, body').css('overflow','visible');
	    	$('.header-nav').animate({top:0}, 800, function() {});
	    }
        return viewLocation === path;

    };


    
    $('#'+$rootScope.lang).addClass('lactive');
    $scope.changeLang = function(lang){
        $('.lang').removeClass('lactive');
        $('#'+lang).addClass('lactive');
        $rootScope.lang = lang;
        $localStorage.lang = lang;
        console.log(lang);
        //$rootScope.loadJSON();

        PageLoader.getPage($rootScope.page_id, function(data) {
            $rootScope.pageData = data;
			$window.location.reload();
        });
        //$window.location.reload();
        if($routeParams.id){
            PageLoader.getPosts(function(data) {
                data = JSON.stringify(data);
                data = JSON.parse(data);
                for (var i = data.length - 1; i >= 0; i--) {
                    if(data[i].custom_fields.event_id[0].toString()==$routeParams.id.toString()){
                        $rootScope.postData = data[i];
                    }
                };
            });
        }		
    }




});


