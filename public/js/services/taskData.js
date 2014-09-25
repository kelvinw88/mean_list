mean_list.factory('TaskFactory', ['$http',function($http) {
  return {
    get : function() {
      return $http.get('/api/tasks');
    },
    get_project_tasks : function(project_id) {
      return $http.get('/api/tasks/:project_id');
    },
    create : function(TaskData) {
      return $http.post('/api/tasks', TaskData);
    },
    delete : function(id) {
      return $http.delete('/api/tasks/' + id);
    },
    edit : function(id) {
      return $http.post('/api/tasks/' + id);
    }
  }
}]);
