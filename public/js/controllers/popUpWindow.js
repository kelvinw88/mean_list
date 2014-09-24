
mean_list.controller('WindowController', function($scope, $stateParams, ProjectFactory, $filter, $http, books) {
  $scope.startAdd = function() {
    $scope.newItem = { name: '', publisher: '', description: '' };
    $scope.adding = true;
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
});

// Some starter data to make the window scroll when opened.
mean_list.value("books", [

]);