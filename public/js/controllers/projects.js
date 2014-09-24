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

mean_list.controller('WindowController', function($scope, $stateParams, ProjectFactory, $filter, $http, books) {
  $scope.startAdd = function() {
    $scope.newItem = { name: '', publisher: '', description: '' };
    $scope.adding = true;
  };

  $scope.items = angular.copy(books);    
  $scope.addItem = function() {
    $scope.adding = false;
    var newItem = angular.copy($scope.newItem);
    newItem.description = newItem.description.replace(/\n/g, '<br>');
    newItem.description = "<p>" + newItem.description + "</p>";
    $scope.items.push(newItem);
  };

  $scope.cancelAdd = function() {
    $scope.adding = false;
  };
});

// Some starter data to make the window scroll when opened.
mean_list.value("books", [

]);

mean_list.controller('ProjectsCtrl', function($scope, $stateParams, ProjectFactory, $filter, $http) {
  $scope.edit = true;

  $scope.test = "hello";


  ProjectFactory.get()
    .success(function(data) {
      $scope.projects = data

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
        console.log("create");
        console.log(data);
        $scope.loading = false;
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.projects = data; // assign our new list of todos
      });
    }
  };

  // DELETE ==================================================================
  // delete a todo after checking it
  $scope.deleteProject = function(project_id) {
    $scope.loading = true;
    ProjectFactory.delete(project_id)
    // if successful creation, call our get function to get all the new todos
    .success(function(data) {
      $scope.loading = false;
      $scope.projects = data; // assign our new list of todos
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
    console.log("saving Project");
    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.formData.projects != undefined) {

      // call the create function from our service (returns a promise object)
      ProjectFactory.create($scope.formData)

      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        console.log("create");
        console.log(data);
        $scope.loading = false;
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.projects = data; // assign our new list of todos

      });
    }
  };

});
