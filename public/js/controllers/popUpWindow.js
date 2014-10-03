
mean_list.controller('WindowController', function($scope, $stateParams, ProjectFactory, $filter, $http, books, TaskFactory) {

  // test

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  // $scope.status = {
  //   isFirstOpen: true,
  //   isFirstDisabled: false
  // };

// stop test


  $scope.startAdd = function() {
    $scope.newItem = { name: '', publisher: '', description: '' };
    $scope.adding = true;
    $scope.openStatusWindow = false;

  };

  $scope.items = angular.copy(books);    // check what this does
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

$scope.doneTask = function(id) {
  console.log($scope.task);
  $scope.task.done = !$scope.task.done;
  TaskFactory.edit($scope.task)
  .success(function(data){
    $scope.tasks = data;
  });
  }

$scope.descriptionAdd = function(id) {


  $scope.adding = false
    TaskFactory.edit($scope.task)
  .success(function(data){
    $scope.tasks = data;

  });
}

$scope.selectStatus = function() {


  $scope.openStatusWindow = false;
  TaskFactory.edit($scope.task)
  .success(function(data){
    $scope.tasks = data;
  });
  }
//datepicker starts
$scope.today = function() {

    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event, task) {
    $event.preventDefault();
    $event.stopPropagation();

    task.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy'];
  $scope.format = $scope.formats[0];
//datepicker ends


});

// Some starter data to make the window scroll when opened.
mean_list.value("books", [

]);
