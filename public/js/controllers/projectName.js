mean_list.controller('ProjectName', function($scope, $stateParams, ProjectFactory, $filter, $http) {
  $scope.beingEdited = false;

  $scope.finishEditing = function(project_id) { 
    $scope.beingEdited = false;
    $scope.loading = true;
    debugger
    ProjectFactory.edit($scope.project)
    // if successful creation, call our get function to get all the new todos
    .success(function(data) {
      console.log(data);
      $scope.loading = false;
      $scope.projects = data; // assign our new list of todos
    });
  };

});