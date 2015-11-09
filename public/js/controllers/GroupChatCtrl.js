myapp.controller('GroupChatCtrl', ["$scope", "$routeParams",
	function ($scope, $routeParams){
		$scope.theGroup = $routeParams.newGroupName;
		console.log('GroupChatCtrl fired', $routeParams.newGroupName);
}])