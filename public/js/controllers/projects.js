mean_list.controller('ProjectsCtrl', function($timeout, $location, $scope, $stateParams, ProjectFactory, $filter, $http, $rootScope, $cookies, $cookieStore) {

  if($rootScope.currentUser == undefined) {
    $rootScope.currentUser = {
      username: $cookies.user_name,
      _id: $cookies.user_id,
    }
  }

  $scope.edit = true;

  $scope.projects = [];

  $scope.username = $stateParams.username;

  console.log($scope.username)


    //   $scope.timeInMs = 0;
    //
    // var countUp = function() {
    //     $scope.timeInMs+= 500;
    //     $timeout(countUp, 500);
    //
    // }
    //
    // $timeout(countUp, 500);

  var getProjects = function(){
    ProjectFactory.get($scope.username)
    .success(function(data) {

      $scope.projects = data;

    });
    $timeout(getProjects, 1000);
  }
  $timeout(getProjects, 500);




  $scope.logoutCurrentUser = function() {
    $cookieStore.remove('user_name');
    $cookieStore.remove('user_id');
    $location.path('/');
  }

  $scope.createProject = function() {
    $scope.loading = true;
    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.formData.name != undefined) {
      // call the create function from our service (returns a promise object)
      $scope.formData.username = $stateParams.username;
      // console.log($scope.formData);

      ProjectFactory.create($scope.formData)
      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        $scope.loading = false;
        // console.log(data);
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
      // $scope.projects = data; // assign our new list of todos
      $location.path( $scope.username + '/projects');

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
    // $scope.search = query;
    $location.path( $scope.username + '/projects/search/' + query);
  }


});
