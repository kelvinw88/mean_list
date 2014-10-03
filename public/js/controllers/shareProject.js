mean_list.controller('ShareProjectCtrl', function($scope,$stateParams, $filter, $http, UserFactory, ProjectFactory, $rootScope, $location, notify) {

  console.log("Share Project");
  console.log($stateParams.project_id);

  $scope.project_name = "";

  ProjectFactory.get_a_project($stateParams.project_id)
  .success(function(data) {
    $scope.project = data;
  });

  UserFactory.get_all_username()
    .success(function(data) {
      console.log(data);
      $scope.users = data;
    });


  $scope.addMember = function(user, project){
    project.users.push(user._id);

    ProjectFactory.edit(project)
      .success(function(data){
        notify("You have added " + user.username + " to your project!");
    });
  };




});
