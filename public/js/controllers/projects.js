mean_list.controller('ProjectsCtrl', function($scope, $stateParams, ProjectFactory, $filter, $http) {

  ProjectFactory.get()
    .success(function(data) {
      $scope.names = data
      console.log(data);
      // $scope.todos = data;
      // $scope.loading = false;

    });

      $scope.createTodo = function() {
      $scope.loading = true;
      $scope.stores = [{id: 1, name: 'Burnaby'}, {id: 2, name: 'Vancouver'}, {id: 3, name: 'Nanaimo'}]


      // validate the formData to make sure that something is there
      // if form is empty, nothing will happen
      if ($scope.formData.name != undefined) {

        // call the create function from our service (returns a promise object)
        ProjectFactory.create($scope.formData)

          // if successful creation, call our get function to get all the new todos
          .success(function(data) {
            console.log("create");
            console.log(data);
            $scope.loading = false;
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.names = data; // assign our new list of todos

          });
      }
    };

    // DELETE ==================================================================
    // delete a todo after checking it
    $scope.deleteProject = function(id) {
      $scope.loading = true;

      ProjectFactory.delete(id)
        // if successful creation, call our get function to get all the new todos
        .success(function(data) {
          $scope.loading = false;
          $scope.names = data; // assign our new list of todos
        });
    };

  $scope.saveUser = function() {
      $scope.loading = true;
      console.log("saving task");
      // validate the formData to make sure that something is there
      // if form is empty, nothing will happen
      if ($scope.formData.name != undefined) {

        // call the create function from our service (returns a promise object)
        ProjectFactory.create($scope.formData)

          // if successful creation, call our get function to get all the new todos
          .success(function(data) {
            console.log("create");
            console.log(data);
            $scope.loading = false;
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.names = data; // assign our new list of todos

          });
      }
    };

});
