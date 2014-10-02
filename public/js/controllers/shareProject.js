mean_list.controller('ShareProjectCtrl', function($scope, $filter, $http, UserFactory, ProjectFactory, $rootScope, $location, notify) {

  console.log("Share Project");
  UserFactory.get_all_username()
    .success(function(data) {
      console.log(data);
      $scope.users = data;
    });

});
