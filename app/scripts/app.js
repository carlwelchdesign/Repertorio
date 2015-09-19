'use strict';

/**
 * @ngdoc overview
 * @name repertorioApp
 * @description
 * # repertorioApp
 *
 * Main module of the application.
 */
var repertorio = angular
  .module('repertorioApp', [
    // 'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'slick',
    'jqwidgets',
    'ngStorage',
    'ngSanitize'
  ]);

  repertorio.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'      
      })
      .when('/performances', {
        templateUrl: 'views/performances.html',
        controller: 'PerformancesCtrl'
      })
      .when('/event/:id', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl',
        controllerAs: 'app'
      })
      .when('/purchase/:id', {
        templateUrl: 'views/purchase.html',
        controller: 'PurchaseCtrl',
        controllerAs: 'app'
      })
      .when('/combotickets', {
        templateUrl: 'views/combotickets.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/repertorio-espanol', {
        templateUrl: 'views/repertorio-espanol.html',
        // controller: 'AboutCtrl'
      })
      .when('/company', {
        templateUrl: 'views/company.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/donate', {
        templateUrl: 'views/donate.html',
        controller: 'DonateCtrl'

      })
      .when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl'

      })
      .when('/opportunities', {
        templateUrl: 'views/opportunities.html',
        controller: 'OpportunitiesCtrl'
      })
      .when('/past-winners', {
        templateUrl: 'views/past-winners.html'

      }) 
      .when('/view-alumni', {
        templateUrl: 'views/view-alumni.html'

      })
      .when('/tours', {
        templateUrl: 'views/tours.html',
        controller: 'ToursCtrl' 

      })
      .when('/nuestrasvoces-submit', {
        templateUrl: 'views/nuestrasvoces-submit.html'
      })
      .when('/vanlier-apply', {
        templateUrl: 'views/vanlier-apply.html'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  
  })
  .run(function($rootScope, $localStorage, PatronData) {

      // PatronData.getPatronJson(function(results) {
      //     $rootScope.events = results.events;
      // });

      PatronData.fetchData(function(results) {
          $rootScope.events = results.events;
      });

      if ($localStorage.lang){
        
        $rootScope.lang = $localStorage.lang;
        $('#'+$rootScope.lang).addClass('lactive');
      }else{
        $rootScope.lang = 'en';
      }

  })
  .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
  }])
  .filter('isFuture', function() {
    return function(items) {
      return items.filter(function(item){
        return moment(new Date(item.name)).isAfter(new Date());
      })
    }
  });



// window.open('https://repertorio.secure.force.com/signup')"