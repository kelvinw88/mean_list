var todoController = angular.module('todoController', [])

todoController.controller('TestController', function($scope, $rootScope) {
  alert("Hello");
  $scope.test = "Hello world";

  $scope.testVar = "WTF";
  $rootScope.hello = "HELLO FFFF";

});


todoController.controller('GregController', function($scope, $rootScope) {
  $scope.test = "Youre are awesome";

});