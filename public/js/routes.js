angular.module('myapp')
.config(function ($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		//its gonna load this page and run this controller.
		templateUrl : 'views/home.html',
		controller 	: 'HomeCtrl'
	})
	.when('/form', {
		templateUrl : 'views/form.html',
		controller  : 'FormCtrl'
	})

})