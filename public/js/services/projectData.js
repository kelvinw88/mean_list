mean_list.factory('ProjectFactory', ['$http',function($http) {
  return {
    get : function(userName) {
      return $http.get('/api/projects/' + userName );
    },
    get_a_project : function(id) {
      return $http.get('/api/projects/project/' + id );
    },
    create : function(ProjectData) {
      return $http.post('/api/projects', ProjectData);
    },
    delete : function(id) {
      return $http.delete('/api/projects/' + id);
    },
    edit : function(Project) {
      return $http.post('/api/projects/' + Project._id, Project);
    }
  }
}]);
