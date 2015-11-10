myapp.controller('GroupChatCtrl', ["$scope", "$routeParams", "$firebaseObject", "$firebaseArray", "$firebaseAuth",
	function ($scope, $routeParams, $firebaseObject, $firebaseArray, $firebaseAuth){

		var ref 			= new Firebase("https://amber-fire-1000.firebaseio.com/"+$routeParams.groupId);
		var groupMessageRef 	= new Firebase("https://amber-fire-1000.firebaseio.com/group");
		var authRef 		= new Firebase("https://amber-fire-1000.firebaseio.com/","sample");

		$scope.theGroup 	= $firebaseObject(ref);
		$scope.msgGroup = $firebaseArray(groupMessageRef);
		$scope.authObj 		= $firebaseAuth(authRef);

		$scope.authObj.$onAuth(function(authData) {

        	$scope.authData = authData;
	        $scope.chatUsername = authData.password.email;
			$scope.groupMessages = $firebaseArray(ref.limit(15));

	        console.log("Username is ", $scope.chatUsername);
	        console.log("message is ", $scope.msgGroup);

	        $scope.addMessage = function() {
	            $scope.groupMessages.$add({
	                name: $scope.chatUsername, 
	                value: $scope.msgGroup
	            });
	        $scope.msgGroup = "";
	        }
	        
    	})

    	



		console.log('GroupChatCtrl fired', $scope.groupMessages);
}])