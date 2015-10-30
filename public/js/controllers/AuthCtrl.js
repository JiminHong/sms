
var myapp = angular.module('myapp');

myapp.factory("Auth", function ($firebaseAuth){
	var ref = new Firebase("https://amber-fire-1000.firebaseio.com/");
	return $firebaseAuth(ref);
});

myapp.controller("AuthCtrl", ["$scope", "Auth", function ($scope, Auth){

		Auth.$onAuth = function(authData){
			$scope.authData = authData;
		}

		$scope.login = function(){
			Auth.$authWithOAuthPopup("facebook")
			.then(function(authData){
				$scope.authData = authData;
				console.log("when $onAuth :::: ",authData);
			})
			.catch(function(error) {
				console.log(error);
			});
		}

		$scope.logout = function() {
			Auth.$unauth();
		}

		console.log("authCtrl is fired");

}])