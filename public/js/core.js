var todo = angular.module( 'todo',[
    // 'todoController',
    // 'todoService',
     'ngRoute',
     'app',
     'xeditable',
     'ui.bootstrap'
  ]);

todo.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/test.html',
    controller: 'TestController'
  }).
  when('/greg', {
    templateUrl: 'partials/greg.html',
    controller: 'GregController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
