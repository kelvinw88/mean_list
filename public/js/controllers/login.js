mean_list.controller('LoginCtrl', function($scope, ProjectFactory, $filter, $http, TaskFactory) {
  $scope.hideLoginWindow = true;
  $scope.hideSignupWindow = true;

  $scope.openLoginWindow = function () {
    console.log("hello");
  }

});