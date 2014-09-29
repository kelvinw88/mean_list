mean_list.controller('ProjectsCtrl', function($location, $scope, $stateParams, ProjectFactory, $filter, $http) {



  $scope.edit = true;

  var updateProjects = function() {
    ProjectFactory.get()
      .success(function(data) {
        $scope.projects = data
      });
  };
  updateProjects();
  window.setInterval(function() {
    console.log("Updating projects on interval!");
    updateProjects();
  }, 5000);

  $scope.hideEdit2 = function () {
    alert("hiding now...");
    $scope.edit = false;
  };

  $scope.createProject = function() {
    $scope.loading = true;
    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.formData.name != undefined) {
      // call the create function from our service (returns a promise object)
      ProjectFactory.create($scope.formData)
      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        $scope.loading = false;
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.projects = data; // assign our new list of todos
      });
    }
  };

  // DELETE ==================================================================
  // delete a todo after checking it
  $scope.deleteProject = function(project_id) {
    console.log("delete project");
    $scope.loading = true;
    ProjectFactory.delete(project_id)
    // if successful creation, call our get function to get all the new todos
    .success(function(data) {
      $scope.loading = false;
      $scope.projects = data; // assign our new list of todos
      $location.path('/projects');
    });
  };

  $scope.editProject = function(project_id) {
    $scope.loading = true;
    ProjectFactory.edit(project_id)
    // if successful creation, call our get function to get all the new todos
    .success(function(data) {
      $scope.loading = false;
      $scope.projects = data; // assign our new list of todos
    });
  };

  $scope.saveProject = function() {
    $scope.loading = true;
    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.formData.projects != undefined) {
      // call the create function from our service (returns a promise object)
      ProjectFactory.create($scope.formData)
      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        $scope.loading = false;
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.projects = data; // assign our new list of todos
      });
    }
  };

  $scope.globalSearch = function(query){
    $scope.search = query;
    $location.path('/projects/search/' + query);
  }


});
