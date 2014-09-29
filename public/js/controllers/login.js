mean_list.controller('loginCtrl', function($scope, $filter, $http, UserFactory) {
  $scope.hideLoginWindow = true;
  $scope.hideSignupWindow = true;



$scope.createUser = function(){
  if ($scope.userData != undefined) {
    console.log($scope.userData);
    UserFactory.create($scope.userData)
    // if successful creation, call our get function to get all the new todos
    .success(function(data) {
      console.log("data is:"  + data);
      // $scope.taskData = {}; // clear the form so our user is ready to enter another
      // $scope.tasks.push(data); // assign our new list of todos
    });
  }
}

$scope.loginUser = function(){
  console.log("login in...");
  if ($scope.userData != undefined) {
    console.log($scope.userData);
     TaskFactory.create($scope.userData)
    // if successful creation, call our get function to get all the new todos
    .success(function(data) {
      console.log("data is:"  + data);
      // $scope.taskData = {}; // clear the form so our user is ready to enter another
      // $scope.tasks.push(data); // assign our new list of todos
    });
  }
}


 $scope.createTask = function() {
    $scope.loading = true;

    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.taskData.name != undefined) {
      $scope.taskData.project = $scope.project.project_id;
      // call the create function from our service (returns a promise object)
      TaskFactory.create($scope.taskData)
      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        $scope.loading = false;
        $scope.taskData = {}; // clear the form so our user is ready to enter another
        $scope.tasks.push(data); // assign our new list of todos
      });
    }
  };

});