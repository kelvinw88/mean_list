mean_list.factory('UserFactory', ['$http',function($http) {
  return {
    get_user : function(UserData){
      return $http.get('/api/users/login' , UserData);
    },
    create : function(UserData) {
      return $http.post('/api/users/create', UserData);
    },
    delete : function(UserData) {
      return $http.delete('/api/users', UserData);
    },
    edit : function(UserData) {
      return $http.post('/api/users/', UserData);
    }
  }
}]);
