mean_list.controller('SearchCtrl', function($location, $scope, $stateParams, ProjectFactory, TaskFactory, $filter, $http) {

$scope.query = $stateParams.query;

ProjectFactory.get()
  .success(function(data) {
    $scope.projects = data;
  });

TaskFactory.get()
  .success(function(data) {
    $scope.tasks = data;
  });

});

