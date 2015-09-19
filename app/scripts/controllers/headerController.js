'use strict';

angular.module('repertorioApp').controller('HeaderController', function ($rootScope, $scope, $location, $localStorage, PageLoader) {
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
        });
    }


});


