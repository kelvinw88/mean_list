mean_list.controller('ShareProjectCtrl', function($scope,$stateParams, $filter, $http, UserFactory, ProjectFactory, $rootScope, $location, notify) {

  console.log("Share Project");
  console.log($stateParams.project_id);

  $scope.project_name = "";

  ProjectFactory.get_a_project($stateParams.project_id)
  .success(function(data) {

    $scope.project_name = data.name;
  });

  UserFactory.get_all_username()
    .success(function(data) {
      console.log(data);
      $scope.users = data;
    });

});
