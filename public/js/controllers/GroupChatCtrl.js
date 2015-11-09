myapp.controller('GroupChatCtrl', ["$scope", "$routeParams", "$firebaseObject",
	function ($scope, $routeParams, $firebaseObject){
		var ref = new Firebase("https://amber-fire-1000.firebaseio.com/"+$routeParams.groupId);
		$scope.theGroup = $firebaseObject(ref);
		console.log('GroupChatCtrl fired', $routeParams.groupId, $scope.theGroup);
}])