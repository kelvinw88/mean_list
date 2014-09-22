// angular.module('todoService', [])

  // super simple service
  // each function returns a promise object 
todo.factory('todoFactory', ['$http',function($http) {
  return {
    get : function() {
      return $http.get('/api/projects');
    },
    create : function(todoData) {
      return $http.post('/api/projects', todoData);
    },
    delete : function(id) {
      return $http.delete('/api/todos/' + id);
    }
  }
}]);

// todo.factory('todoFactory', function($resource) {
//   return $resource ('/projects');
// });

