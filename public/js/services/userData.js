mean_list.factory('UserFactory', ['$http',function($http) {
  return {
    get : function() {
      return $http.get('/api/projects');
    },
    get_a_project : function(id){
      return $http.get('/api/projects/' + id);
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
