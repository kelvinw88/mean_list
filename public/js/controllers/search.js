mean_list.controller('SearchCtrl', function($location,$rootScope, $scope, $stateParams, ProjectFactory, TaskFactory, $filter, $http) {

$scope.query = $stateParams.query;

$scope.username = $stateParams.username;

console.log($rootScope.currentUser._id);


ProjectFactory.get($scope.username)
  .success(function(data) {
    $scope.projects = data;
  });

TaskFactory.get_user_tasks($rootScope.currentUser._id)
  .success(function(data) {
    $scope.tasks = data;
  });

});
