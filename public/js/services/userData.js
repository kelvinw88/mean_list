mean_list.factory('UserFactory', ['$http',function($http) {
  return {
    get : function() {
      return $http.get('/api/users');
    },
    get_a_project : function(id){
      return $http.get('/api/users/' + id);
    },
    create : function(UserData) {
      return $http.post('/api/users', UserData);
    },
    delete : function(id) {
      return $http.delete('/api/users/' + id);
    },
    edit : function(Project) {
      return $http.post('/api/users/' + User._id, User);
    }
  }
}]);
