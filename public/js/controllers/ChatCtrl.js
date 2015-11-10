myapp.controller('ChatCtrl', ["$scope", "$firebaseArray", "$firebaseAuth", "$location", "$routeParams", 
function ($scope, $firebaseArray, $firebaseAuth, $location, $routeParams) {
    console.log('ChatCtrl fired');


    var ref = new Firebase("https://amber-fire-1000.firebaseio.com/", "sample");
    $scope.authObj = $firebaseAuth(ref);

    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: onAuth
    // any time auth status updates, add the user data to scope
    $scope.authObj.$onAuth(function(authData) {
        $scope.authData = authData;
        console.log("THIS IS AUTHDATA in Chat Ctrl",authData.password.email);
        
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: Adding messages        
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
    $scope.groups = $firebaseArray(groupRef);

    //Adding a new group chat
    $scope.createGroup = function(){
        $scope.groups.$add({
            newGroupName: $scope.groups.groupName,
            newGroupPassword: $scope.groups.groupPassword,
            groupTitle: ""
        });
    }

    

    $scope.enterGroupChat = function($scope, newGroupName, newGroupPassword){
        console.log("ID in enterGroupChat", $scope.newGroupPassword)

        $scope.groupTitle = $scope.newGroupName;

        $scope.groupId = $scope.$id; 
        $scope.newGroupPasswordAuth = prompt("Enter the password for " + $scope.newGroupName, "Enter the password")
        if ($scope.newGroupPasswordAuth === $scope.newGroupPassword){
            $location.path('/groupChat/'+ $scope.$id);
        }else{
            alert("wrong")
            $scope.newGroupPasswordAuth = prompt("Re enter your password")
        }
    }

    
    
}]);


