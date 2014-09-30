mean_list.controller('loginCtrl', function($scope, $filter, $http, UserFactory, $rootScope, $location) {
  $scope.hideLoginWindow = true;
  $scope.hideSignupWindow = true;

  console.log("In Login Ctrl");

$scope.createUser = function(){
  if ($scope.userData != undefined) {
    UserFactory.create($scope.userData)
    .success(function(data) {
       $rootScope.currentUser = {
        _id: data._id,
        username: data.username,
      }
      document.cookie = "user_id =" + data._id;
      document.cookie = "user_name =" + data.username;
      $location.path('/'+ $rootScope.currentUser.username + '/projects');
    }).catch(function(err){
      console.error(err);
    });
  }
}

$scope.loginUser = function(){

  if ($scope.userData != undefined) {
    console.log("going into UserFactory...");
    UserFactory.get_user($scope.userData)
    .success(function(data) {
      $rootScope.currentUser = {
        _id: data[0]._id,
        username: data[0].username,
      }
      document.cookie = "user_id =" + data[0]._id;
      document.cookie = "user_name =" + data[0].username;
      $location.path('/'+ $rootScope.currentUser.username + '/projects');
    });
  }
}


});
