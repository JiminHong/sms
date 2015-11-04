
var myapp = angular.module('myapp');

myapp.controller('AuthCtrl', ["$scope", "$firebaseAuth", "$firebaseObject", "$location", "$routeParams",
	function ($scope, $firebaseAuth, $firebaseObject, $location, $routeParams){
		
		var ref = new Firebase("https://amber-fire-1000.firebaseio.com/");
		$scope.authObj = $firebaseAuth(ref);

		// Local Login function
		$scope.localLogin = function() {
			console.log("Local login function runs");
			console.log("$scope.localLoginUser", $scope.localLoginUser);
			$scope.authObj.$authWithPassword({
				email: $scope.localLoginUser.email,
				password: $scope.localLoginUser.password
			})
			.then(function(authData) {
				console.log("Logged in with ", authData.uid);
			})
			.catch(function(error) {
				console.error("Failed", error);
			})
		}

		// Local Register function
		$scope.register = function() {
			//Object of user data after register
			console.log("$scope.authObj :::::", $scope.registerUser);

			//Creating local user with email and password 
			$scope.authObj.$createUser({
				//registerUser ng-model
				email: $scope.registerUser.email,
				password: $scope.registerUser.password
			})
			//Console log unique ID
			.then(function(userData){
				console.log(userData.uid);
				return $scope.authObj.$authWithPassword({
					email: $scope.registerUser.email,
					password: $scope.registerUser.password
				});
			})
			//Then with that authData 
			.then(function(authData) {
				console.log("Logged in as ", authData.uid)
			})
			.catch(function(error) {
				console.error(error);
			})

        };

        //Login with Facebook Oauth
		$scope.login = function(obj){
			$scope.authObj.$authWithOAuthPopup("facebook")
			.then(function(authData){
				$scope.authData = authData;
				console.log("authData :::: ",authData);
			})
			.catch(function(error) {
				console.log(error);
			});
		}
		//Logout with Facebook 
		$scope.logout = function() {
			$scope.authObj.$unauth();
			console.log("Logout");
			$location.path('/');
		}

		//Directs to Creating form page
		$scope.goCreateForm = function(){
			$location.path('/createForm');
		}
		//Directs to the chat page
		$scope.goChat = function(){
			$location.path('/chat');
		}

		console.log("authCtrl is fired");

}])