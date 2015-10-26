angular.module('myapp')
.controller('HomeCtrl', ["$scope", "$http", function ($scope, $http){
	console.log('HomeCtrl fired');

	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		console.log($scope.artists);
	})
}])