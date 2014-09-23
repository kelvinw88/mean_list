mean_list.factory('ProjectFactory', ['$http',function($http) {
  return {
    get : function() {
      return $http.get('/api/projects');
    },
    create : function(ProjectData) {
      return $http.post('/api/projects', ProjectData);
    },
    delete : function(id) {
      return $http.delete('/api/projects/' + id);
    },
    edit : function(Project) {
      console.log("got into the routing");
      return $http.post('/api/projects/' + Project._id, Project);
    }
  }
}]);
