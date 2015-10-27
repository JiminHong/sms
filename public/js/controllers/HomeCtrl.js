angular.module('myapp')
.controller('HomeCtrl', ["$scope", "$http", "$firebaseArray", function ($scope, $http, $firebaseArray){
	console.log('HomeCtrl fired');

	var ref = new Firebase("https://amber-fire-1000.firebaseio.com/");
	$scope.users = $firebaseArray(ref);

	$scope.postComment = function(){
		console.log("data", $scope.newComment);

		$scope.users.$add({
			author: 	$scope.newComment.author,
			comment: 	$scope.newComment.comment
		})
	}

	$scope.removeComment = function(obj){
		$scope.users.$remove(obj).then(function(ref){
			ref.key() === obj.$id;
		})
	}

	$scope.updateComment = function(obj){
		$scope.users.$save(obj).then(function(ref) {
			ref.key() === obj.$id;
		})

		location.reload();
	}

}])