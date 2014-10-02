mean_list.controller('loginCtrl', function($scope, $filter, $http, UserFactory, $rootScope, $location, notify) {
  $scope.hideLoginWindow = true;
  $scope.hideSignupWindow = true;
  $scope.background_color = "loginBackground";

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
      notify("A user with that username already exists, please choose another username");
    });
  }
}

$scope.loginUser = function(){

  if ($scope.userData != undefined) {
    console.log("going into UserFactory...");
    UserFactory.get_user($scope.userData)
    .error(function(data) {
      console.log(data);
    })
    .success(function(data) {
      console.log('success');
      $rootScope.currentUser = {
        _id: data[0]._id,
        username: data[0].username,
      }
      notify("Welcome" + " " + $rootScope.currentUser.username);
      document.cookie = "user_id =" + data[0]._id;
      document.cookie = "user_name =" + data[0].username;
      $location.path('/'+ $rootScope.currentUser.username + '/projects');
    }).catch(function(err){
      console.error(err);
      notify("The password you entered does not match the username, please try again");
    });
  }
}

});
