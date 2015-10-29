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
		templateUrl : 'views/home.html',
		controller 	: 'HomeCtrl', function($scope, $http){

		}
	})
	.when('/updateForm/:obj/:index', {
		//its gonna load this page and run this controller.
		templateUrl : 'views/updateForm.html',
		controller 	: 'FormCtrl', function($scope, $http){
			
		}
	})

})




