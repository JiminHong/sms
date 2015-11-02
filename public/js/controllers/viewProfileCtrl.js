angular.module('myapp')
.controller('viewProfileCtrl', ["$scope", "$http", "$firebaseArray", "$location", "$routeParams", 
	function ($scope, $http, $firebaseArray, $location, $routeParams){
	console.log('viewProfileCtrl fired');


}])