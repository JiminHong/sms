myapp
.controller('viewProfileCtrl', ["$scope", "$http", "$firebaseArray", "$location", "$routeParams", 
	function ($scope, $http, $firebaseArray, $location, $routeParams){
	console.log('viewProfileCtrl fired');
	console.log("scope in viewProfileCtrl ::: ", $scope);


}])