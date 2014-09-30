mean_list.controller('loginCtrl', function($scope, $filter, $http, UserFactory, $rootScope, $location) {
  $scope.hideLoginWindow = true;
  $scope.hideSignupWindow = true;



$scope.createUser = function(){
  if ($scope.userData != undefined) {
    console.log($scope.userData);
    UserFactory.create($scope.userData)
    .success(function(data) {
      $rootScope.currentUser = data;
      console.log($rootScope.currentUser);
      $location.path('/'+ $rootScope.currentUser.username + '/projects');
    });
  }
}

$scope.loginUser = function(){

  if ($scope.userData != undefined) {
    console.log("going into UserFactory...");
    UserFactory.get_user($scope.userData)
    .success(function(data) {
      $rootScope.currentUser = data[0];
      console.log($rootScope.currentUser);
      $location.path('/'+ $rootScope.currentUser.username + '/projects');
    });
  }
}


});
