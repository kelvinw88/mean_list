mean_list.factory('TaskFactory', ['$http',function($http) {
  return {
    get : function() {
      return $http.get('/api/tasks');
    },
    get_user_tasks : function(user_id) {
      return $http.get('/api/tasks/user/' + user_id);
    },
    get_project_tasks : function(project_id) { // move this to project API not TASK API
      return $http.get('/api/tasks/project/' + project_id);
    },
    create : function(TaskData) {
      return $http.post('/api/tasks', TaskData);
    },
    delete : function(id) {
      return $http.delete('/api/tasks/' + id);
    },
    edit : function(task) {
      return $http.post('/api/tasks/' + task._id, task);
    }
  }
}]);
