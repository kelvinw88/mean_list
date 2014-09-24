mean_list.controller('TasksCtrl', function($scope, $stateParams, TaskFactory, $filter, $http) {

  $scope.project = $stateParams;
  console.log($scope.project.project_id);

  // TaskFactory.get()
  //   .success(function(data) {
  //     $scope.tasks = data
  //     // $scope.loading = false;
  //   });
  //
  // //
  // // TaskFactory.get_project_tasks($stateParams.project.project_id)
  // //   .success(function(data) {
  // //     // $scope.tasks = data
  // //     console.log("getproject" data);
  // //     // $scope.loading = false;
  // //   });



  if ($stateParams.project_id != undefined)
    {
    console.log("if");
    console.log($stateParams.project_id);
    TaskFactory.get_project_tasks($stateParams.project_id)
    .success(function(data) {
      $scope.tasks = data
    });
    }
  else
    {
      console.log("else");
      TaskFactory.get()
      .success(function(data) {
        $scope.tasks = data
      });
    }



  $scope.createTask = function() {
    $scope.loading = true;

    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.formData.name != undefined) {
      $scope.formData.project = $scope.project.project_id;
      // call the create function from our service (returns a promise object)
      TaskFactory.create($scope.formData)
      // if successful creation, call our get function to get all the new todos
      .success(function(data) {

        $scope.loading = false;
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.tasks = data; // assign our new list of todos
      });
    }
  };

  // DELETE ==================================================================
  // delete a todo after checking it
  $scope.deleteTask = function(task_id) {
    $scope.loading = true;
    TaskFactory.delete(task_id)
    // if successful creation, call our get function to get all the new todos
    .success(function(data) {
      $scope.loading = false;
      $scope.tasks = data; // assign our new list of todos
    });
  };

  $scope.saveTask = function() {
    $scope.loading = true;
    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.formData.tasks != undefined) {

      // call the create function from our service (returns a promise object)
      TaskFactory.create($scope.formData)

      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        $scope.loading = false;
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.tasks = data; // assign our new list of todos

      });
    }
  };

});
