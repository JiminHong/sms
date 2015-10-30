
var myapp = angular.module('myapp');

// myapp.factory("Auth", function ($firebaseAuth){
// 	var ref = new Firebase("https://amber-fire-1000.firebaseio.com/");
// 	return $firebaseAuth(ref);
// });

myapp.controller('AuthCtrl', ["$scope", "$firebaseAuth", "$firebaseObject", "$location", "$routeParams",
	function ($scope, $firebaseAuth, $firebaseObject, $location, $routeParams){
		var ref = new Firebase("https://amber-fire-1000.firebaseio.com/");
		$scope.authObj = $firebaseAuth(ref);

		$scope.register = function() {
			console.log("$scope.authObj :::::", $scope.registerUser);

			$scope.authObj.$createUser({
				email: $scope.registerUser.email,
				password: $scope.registerUser.password
			})
			.then(function(userData){
				console.log(userData.uid);

				return $scope.authObj.$authWithPassword({
					email: $scope.registerUser.email,
					password: $scope.registerUser.password
				});
			})
			.then(function(authData) {
				console.log("Logged in as ", authData.uid)
			})
			.catch(function(error) {
				console.error(error);
			})

        };



		$scope.login = function(){
			Auth.$authWithOAuthPopup("facebook")
			.then(function(authData){
				$scope.authData = authData;
				console.log("authData :::: ",authData);
			})
			.catch(function(error) {
				console.log(error);
			});
		}

		$scope.logout = function() {
			Auth.$unauth();
			console.log("Logout");
			$location.path('/');
		}

		console.log("authCtrl is fired");

}])