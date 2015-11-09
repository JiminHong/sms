myapp.controller('ChatCtrl', ["$scope", "$firebaseArray", "$firebaseAuth", 
function ($scope, $firebaseArray, $firebaseAuth) {
    console.log('ChatCtrl fired');

    var ref = new Firebase("https://amber-fire-1000.firebaseio.com/", "sample");
    $scope.authObj = $firebaseAuth(ref);

    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: onAuth
    // any time auth status updates, add the user data to scope
    $scope.authObj.$onAuth(function(authData) {
        $scope.authData = authData;
        console.log("THIS IS AUTHDATA in Chat Ctrl",authData.password.email);
        
        $scope.messages = $firebaseArray(ref.limit(15));
        $scope.chatUsername = authData.password.email;
        console.log("Username is ", $scope.chatUsername);

        $scope.addMessage = function() {
            $scope.messages.$add({
                from: $scope.chatUsername, 
                content: $scope.message
            });
        $scope.message = "";
        }
    });

    var groupRef = new Firebase("https://amber-fire-1000.firebaseio.com/");
    $scope.groups = $firebaseArray(ref);

    $scope.createGroup = function(){
        $scope.groups.$add({
            newGroupName: $scope.groups.groupName,
            newGroupPassword: $scope.groups.groupPassword
        });
        console.log($scope.groups.groupName, $scope.groups.groupPassword);
    }

    $scope.enterGroupChat = function(){
        console.log("enterGroupChat fired");
    }
    
    
}]);


