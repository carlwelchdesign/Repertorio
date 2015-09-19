'use strict';
/**
 * @ngdoc function
 * @name repertorioApp.controller:calendarController
 * @description
 * # CalendarController
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('calendarController', function ($scope) {
    $scope.calendarSettings =
    {
        width: 460,
        height: 400,
        titleHeight: 30,
        enableTooltips: true,
        enableWeekend: true

    };
  
});



