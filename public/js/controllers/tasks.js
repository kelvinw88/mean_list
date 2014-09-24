mean_list.controller('TasksCtrl', function($scope, $stateParams, TaskFactory, $filter, $http) {

  TaskFactory.get()
    .success(function(data) {
      console.log("get");
      $scope.tasks = data
      console.log(data);

      // $scope.loading = false;

    });

  $scope.createTask = function() {
    $scope.loading = true;

    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.formData.name != undefined) {
      // call the create function from our service (returns a promise object)
      TaskFactory.create($scope.formData)
      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        console.log("create");
        console.log(data);
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
    console.log("saving Task");
    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.formData.tasks != undefined) {

      // call the create function from our service (returns a promise object)
      TaskFactory.create($scope.formData)

      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        console.log("create");
        console.log(data);
        $scope.loading = false;
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.tasks = data; // assign our new list of todos

      });
    }
  };

});
