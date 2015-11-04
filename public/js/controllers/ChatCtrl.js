myapp.controller('ChatCtrl', ["$scope", "$firebaseArray", 
function ($scope, $firebaseArray) {
  console.log('ChatCtrl fired');


  var ref = new Firebase("https://amber-fire-1000.firebaseio.com/");
  $scope.messages = $firebaseArray(ref.limit(15));
  $scope.username = 'Guest' + Math.floor(Math.random()*101);
  console.log($scope.username);

  $scope.addMessage = function() {
    $scope.messages.$add({
    from: $scope.username, content: $scope.message
  });
  $scope.message = "";
}}]);