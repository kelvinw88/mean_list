mean_list.controller('homepageCtrl', function($scope, ProjectFactory, $filter, $http, TaskFactory) {
  $scope.hideLoginWindow = true;
  $scope.hideSignupWindow = true;

  $scope.openLoginWindow = function () {
    console.log("hello");
  }

});