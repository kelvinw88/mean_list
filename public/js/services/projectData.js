mean_list.factory('ProjectFactory', ['$http',function($http) {
  return {
    get : function(userName) {
      return $http.get('/api/projects' + userName );
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
