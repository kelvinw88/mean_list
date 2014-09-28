mean_list.controller('SearchCtrl', function($location, $scope, $stateParams, ProjectFactory, TaskFactory, $filter, $http) {

$scope.searchInput = $stateParams.query;

ProjectFactory.get()
  .success(function(data) {
    $scope.projects = data;
    console.log(data);
  });

TaskFactory.get()
  .success(function(data) {
    $scope.tasks = data;
    console.log(data);
  });

  $scope.selectProject = function(projectId){
  console.log(projectId);
  // $scope.search = query;
  // $location.path('/projects/search/' + query);
  }

});

