myapp = angular.module('myapp');

myapp.config(['$interpolateProvider', function($interpolateProvider){
  // $interpolateProvider used to differentiate uses for angular from express
  $interpolateProvider.startSymbol('{[{'); 
  $interpolateProvider.endSymbol('}]}'); 
}])


myapp.config(function ($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		//its gonna load this page and run this controller.
		templateUrl : 'views/auth.html',
		controller 	: 'AuthCtrl', function($scope, $http){

		}
	})
	.when('/createForm', {
		//its gonna load this page and run this controller.
		templateUrl : 'views/createForm.html',
		controller 	: 'createFormCtrl', function($scope, $http){

		}
	})
	.when('/updateForm/:userId', {
		//its gonna load this page and run this controller.
		templateUrl : 'views/updateForm.html',
		controller 	: 'FormCtrl', function($scope, $http){
			
		}
	})
	.when('/login/:user', {
		templateUrl : 'views/userProfile.html',
		controller  : 'viewProfileCtrl'
	})

})




