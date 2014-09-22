// var todoController = angular.module('todoController', [])

todo.controller('TestController', function($scope, $rootScope) {
  alert("Hello");
  $scope.test = "Hello world";
  $scope.testVar = "WTF";
  $rootScope.hello = "HELLO FFFF";
});

todo.controller('GregController', function($scope, todoFactory) {

  todoFactory.get()
    .success(function(data) {
      $scope.names = data
      // console.log(data);
      // $scope.todos = data;
      // $scope.loading = false;
    });

      $scope.createTodo = function() {
      $scope.loading = true;

      // validate the formData to make sure that something is there
      // if form is empty, nothing will happen
      if ($scope.formData.name != undefined) {

        // call the create function from our service (returns a promise object)
        todoFactory.create($scope.formData)

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
    $scope.deleteTodo = function(id) {
      $scope.loading = true;

      todoFactory.delete(id)
        // if successful creation, call our get function to get all the new todos
        .success(function(data) {
          $scope.loading = false;
          $scope.names = data; // assign our new list of todos
        });
    };
});