angular.module('todoController', [])

.controller('mainController', function($scope, $rootScope) {
  alert("Hello");
  $scope.test = "Hello world";

  $scope.testVar = "WTF";
  $rootScope.hello = "HELLO FFFF";

});