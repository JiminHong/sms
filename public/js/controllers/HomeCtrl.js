angular.module('myapp')
.controller('HomeCtrl', ["$scope", "$http", "$firebaseArray", function ($scope, $http, $firebaseArray){
	console.log('HomeCtrl fired');

	var ref = new Firebase("https://amber-fire-1000.firebaseio.com/");
	$scope.users = $firebaseArray(ref);

	$scope.postComment = function(){
		console.log("data", $scope.newComment);

		$scope.users.$add({
			author: $scope.newComment.author,
			body: 	$scope.newComment.body
		})
	}

	// $http.get('js/data.json').success(function(data){
	// 	$scope.artists = data;
	// 	console.log($scope.artists);
	// })
}])