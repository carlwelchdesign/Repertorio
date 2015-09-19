'use strict';

/**
 * @ngdoc function
 * @name repertorioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the repertorioApp
 */
angular.module('repertorioApp').controller('ContactCtrl', function ($sce, $scope, $rootScope, PageLoader) {

    $rootScope.page_id = 200;
	PageLoader.getPage($rootScope.page_id, function(data) {
	    $rootScope.pageData = data;
	});

	$scope.to_trusted = function(x){
        return $sce.trustAsHtml(x);
    };
	// form stuff
	$scope.result = 'hidden'
	$scope.resultMessage;
	$scope.formData; //formData is an object holding the name, email, subject, and message
	$scope.submitButtonDisabled = false;
	$scope.submitted = false; //used so that form errors are shown only after the form has been submitted
	$scope.submit = function(contactform) {
	    $scope.submitted = true;
	    $scope.submitButtonDisabled = true;
	    if (contactform.$valid) {
	        $http({
	            method  : 'POST',
	            url     : 'contact-form.php',
	            data    : $.param($scope.formData),  //param method from jQuery
	            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
	        }).success(function(data){
	            console.log(data);
	            if (data.success) { //success comes from the return json object
	                $scope.submitButtonDisabled = true;
	                $scope.resultMessage = data.message;
	                $scope.result='bg-success';
	            } else {
	                $scope.submitButtonDisabled = false;
	                $scope.resultMessage = data.message;
	                $scope.result='bg-danger';
	            }
	        });
	    } else {
	        $scope.submitButtonDisabled = false;
	        $scope.resultMessage = 'Failed :( Please fill out all the fields.';
	        $scope.result='bg-danger';
	    }
	}
});
