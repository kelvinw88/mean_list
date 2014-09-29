mean_list.factory('UserFactory', ['$http',function($http) {
  return {
    get_a_user : function(UserData){
      return $http.get('/api/users' , UserData);
    },
    create : function(UserData) {
      return $http.post('/api/users', UserData);
    },
    delete : function(UserData) {
      return $http.delete('/api/users', UserData);
    },
    edit : function(UserData) {
      return $http.post('/api/users/', UserData);
    }
  }
}]);
