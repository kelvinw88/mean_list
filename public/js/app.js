var mean_list = angular.module('mean_list', [
  'ui.router',
  'ngCookies',
  'ui.bootstrap',
  'cgNotify'
  ]);

//app/js/app.js
mean_list.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('projects', {
        url: '/:username/projects',
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsCtrl'
    })
    .state('projects.tasks', {
        url: '/:project_id/tasks',
        templateUrl: 'partials/tasks.html',
        controller: 'TasksCtrl'
    })
    .state('projects.global_search',{
      url: '/search/:query',
      templateUrl: 'partials/global_search.html',
      controller: 'SearchCtrl'
    })
    .state('projects.share_project',{
      url: '/share_project/:project_id',
      templateUrl: 'partials/share_project.html',
      controller: 'ShareProjectCtrl'
    })
    .state('login', {
      url: '/',
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    });
}]).run(function($rootScope, $state) {
      $rootScope.$state = $state;
    });

// mean_list.run(['$rootScope', function( $rootScope) {
//   $rootScope.$on('$locationChangeStart', function (event) {
//       // alert("HELLO");
//   });
// }]);
