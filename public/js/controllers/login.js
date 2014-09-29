mean_list.controller('LoginCtrl', function($scope, $filter, $http) {
  $scope.hideLoginWindow = true;
  $scope.hideSignupWindow = true;

  $scope.openLoginWindow = function () {
    console.log("hello");
  }

});