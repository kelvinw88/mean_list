angular.module('todoService', [])

  // super simple service
  // each function returns a promise object 
  .factory('todoFactory', ['$http',function($http) {
    return {
      get : function() {
        return $http.get('/');
      },
      create : function(todoData) {
        return $http.post('/api/todos', todoData);
      },
      delete : function(id) {
        return $http.delete('/api/todos/' + id);
      }
    }
  }]);