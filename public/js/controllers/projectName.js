mean_list.controller('ProjectNameCtrl', function($scope, $stateParams, ProjectFactory, $filter, $http) {
  $scope.beingEdited = false;
  $scope.projectNameCopy = $scope.project.name

  $scope.finishEditing = function(project_id) { 
    $scope.beingEdited = false;
    $scope.loading = true;
    var oldProjectName = $scope.project.name;
    $scope.project.name = $scope.projectNameCopy;

    ProjectFactory.edit($scope.project)
    // if successful creation, call our get function to get all the new todos
    .success(function(data) {
      console.log(data);
      $scope.loading = false;
      $scope.projects = data; // assign our new list of todos
    }).error(function(err) {
      console.error(err);
      $scope.project.name = oldProjectName;
    });
  };

  $scope.cancelEditing = function() { 
    $scope.beingEdited = false;
    $scope.loading = true;
    $scope.projectNameCopy = $scope.project.name;
  };

});