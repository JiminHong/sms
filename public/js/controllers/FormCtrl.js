angular.module('myapp')
.controller('FormCtrl', ["$scope", "$http", "$firebaseArray", "$location", "$routeParams", function ($scope, $http, $firebaseArray, $location, $routeParams){
	console.log('FormCtrl fired');

	var ref = new Firebase("https://amber-fire-1000.firebaseio.com/");
	$scope.users = $firebaseArray(ref);
	
	
	$scope.updateComment = function(){
		console.log("routeParams (index#  & obj)", $routeParams);
		$scope.users[$routeParams] = $scope.UpdateData;
		$scope.users.$save($routeParams).then(function(ref){
			console.log(ref)
		})

		$location.path('/');
	}

}])