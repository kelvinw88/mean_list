var todo = angular.module( 'todo',[
    'ProjectsCtrl',
    'ProjectFactory',
     'ui.router',
     'ngRoute',
     'app',
     'xeditable',
     'ui.bootstrap'
  ]);



// todo.config(['$routeProvider', function ($routeProvider) {
//   $routeProvider.
//   when('/list', {
//     templateUrl: 'partials/test.html',
//     controller: 'TestController'
//   }).
//   when('/greg', {
//     templateUrl: 'partials/greg.html',
//     controller: 'GregController'
//   }).
//   otherwise({
//     redirectTo: '/'
//   });
// }]);

//
todo.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('project', {
        url: '/projects',
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsCtrl'
    })
    .state('project.tasks', {
        url: '/:project_id/tasks',
        templateUrl: 'partials/tasks.html',
        controller: 'TasksCtrl'
    });
}]);
