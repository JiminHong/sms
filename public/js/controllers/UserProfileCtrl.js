myapp.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://amber-fire-1000.firebaseio.com/");
    return $firebaseAuth(ref);
  }
]);

myapp
.controller('UserProfileCtrl', ["$scope", "Auth", "$http", "$firebaseArray", "$location", "$routeParams", 
	function ($scope, Auth, $http, $firebaseArray, $location, $routeParams){
	console.log('UserProfileCtrl fired');
	$scope.auth.localLogin = Auth;

	$scope.auth.localLogin.$onAuth(function(authData){
		$scope.authData = authData;
	})
}])