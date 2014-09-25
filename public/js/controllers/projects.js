<<<<<<< Updated upstream
mean_list.controller('ProjectName', function($scope, $stateParams, ProjectFactory, $filter, $http) {
  $scope.beingEdited = false;

  $scope.finishEditing = function() {
    $scope.beingEdited = false;
  };



});



mean_list.controller('ProjectsCtrl', function($scope, $stateParams, ProjectFactory, $filter, $http) {
=======
mean_list.controller('ProjectsCtrl', function($location, $scope, $stateParams, ProjectFactory, $filter, $http) {
>>>>>>> Stashed changes
  $scope.edit = true;

  $scope.test = "hello";




  ProjectFactory.get()
    .success(function(data) {
      console.log("get");
      $scope.projects = data
      console.log(data);
      //$scope.edit = false;
      // $scope.loading = false;

    });

  $scope.hideEdit2 = function () {
    alert("hiding now...");
    $scope.edit = false;
    // console.log($scope.edit);
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

});
