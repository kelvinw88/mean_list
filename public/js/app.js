var mean_list = angular.module('mean_list', [
  'ui.router',
  // 'app'
  'xeditable',
  'ui.bootstrap'
  ]);

//app/js/app.js
mean_list.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('projects', {
        url: '/projects',
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsCtrl'
    })
    .state('projects.tasks', {
        url: '/:project_id/tasks',
        templateUrl: 'partials/tasks.html',
        controller: 'TasksCtrl'
    });

}]);