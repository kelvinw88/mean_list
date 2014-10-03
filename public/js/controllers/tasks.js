
mean_list.controller('TasksCtrl', function($scope, $stateParams, ProjectFactory,$rootScope, TaskFactory, $filter, $http) {


  console.log("In Task Ctrl");
  $scope.project = $stateParams;
  $scope.max = 100;
  $scope.oneAtATime = true;




  $scope.showCompletedTasks = false;



// var getTasks = function(){

  if ($stateParams.project_id != undefined)
    {
    //get project details
    ProjectFactory.get_a_project($stateParams.project_id)
    .success(function(data) {
      $scope.project.name = data.name;
    });
    //get project tasks
    TaskFactory.get_project_tasks($stateParams.project_id)
    .success(function(data) {
      $scope.tasks = data
    });

    }
  // get all tasks if no project is selected
  else
    {
      TaskFactory.get()
      .success(function(data) {
        $scope.tasks = data
      });
    }
//   $timeout(getTask, 1000);
// }
// $timeout(getTasks, 00);



if ($stateParams.project_id != undefined)
  {
  //get project details
  ProjectFactory.get_a_project($stateParams.project_id)
  .success(function(data) {
    $scope.project.name = data.name;
  });
  //get project tasks
  TaskFactory.get_project_tasks($stateParams.project_id)
  .success(function(data) {
    $scope.tasks = data
  });

  }
// get all tasks if no project is selected
else
  {
    TaskFactory.get()
    .success(function(data) {
      $scope.tasks = data
    });
  }




  $scope.createTask = function() {
    $scope.loading = true;

    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.taskData.name != undefined) {
      $scope.taskData.project = $scope.project.project_id;
      $scope.taskData.done = false;
      $scope.taskData.progress_bar = 0;
      $scope.taskData.admin = $rootScope.currentUser._id;
      $scope.taskData.status = 'fa fa-circle-o';
      $scope.taskData.due_date =  null;
      // call the create function from our service (returns a promise object)
      console.log($scope.taskData);
      TaskFactory.create($scope.taskData)
      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        console.log(data);
        $scope.loading = false;
        $scope.taskData = {}; // clear the form so our user is ready to enter another
        $scope.tasks.push(data); // assign our new list of todos


      });
    }
  };

  // DELETE ==================================================================
  // delete a todo after checking it
  $scope.deleteTask = function(task_id) {
    $scope.loading = true;
    TaskFactory.delete(task_id)
    // if successful creation, call our get function to get all the new todos
    .success(function(data) {
      $scope.loading = false;
      $scope.tasks = data; // assign our new list of todos
    });
  };

  $scope.saveProgress = function(task) {
    // console.log(task);
    TaskFactory.edit(task)
    .success(function(data){
      // console.log($scope.tasks);
      // console.log(data);
      // $scope.tasks = data;
    });
  }

  $scope.saveTask = function() {
    $scope.loading = true;
    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen
    if ($scope.formData.tasks != undefined) {

      // call the create function from our service (returns a promise object)
      TaskFactory.create($scope.formData)

      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        $scope.loading = false;
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.tasks = data; // assign our new list of todos

      });
    }
  };

  $scope.checkboxToggle = function(task) {
    task.done = !task.done;
    TaskFactory.edit(task)

  };


  $scope.averageProgress = function() {
    if(!$scope.tasks)
      return 0;

    var sumProgress = 0;
    for (i=0; i < $scope.tasks.length; i++ ) {
      sumProgress += parseInt($scope.tasks[i].progress_bar);
    }
    if (!sumProgress || $scope.tasks.length == 0) return 0;
    return (sumProgress / $scope.tasks.length) ;
  }


  $scope.totalTimeEstimate = function() {
    if(!$scope.tasks)
      return 0;
    var sumTime = 0;
    for (i=0; i < $scope.tasks.length; i++ ) {
      sumTime += $scope.tasks[i].time_estimate;
    }
    if (!sumTime) return 0;
    return (sumTime) ;
  }



  $scope.deleteTask = function(task) {
    console.log("delete task");
    $scope.loading = true;
    TaskFactory.delete(task._id)
    // if successful creation, call our get function to get all the new todos
    .success(function(data) {
      $scope.loading = false;
      // $scope.tasks = data; 


    });
  };



});
