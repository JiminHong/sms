myapp
.controller('UserProfileCtrl', ["$scope", "$http", "$firebaseAuth", "$firebaseArray", "$location", "$routeParams", 
	function ($scope, $http, $firebaseAuth, $firebaseArray, $location, $routeParams){

	//user unique id
	// console.log('UserProfileCtrl fired', $routeParams);

	var ref = new Firebase("https://amber-fire-1000.firebaseio.com/", "sample");
	$scope.authObj = $firebaseAuth(ref);

	// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: onAuth
	// any time auth status updates, add the user data to scope
    $scope.authObj.$onAuth(function(authData) {
      	$scope.authData = authData;
      	console.log("THIS IS AUTHDATA in UserProfileCtrl",authData.password.email);
    });

}])
