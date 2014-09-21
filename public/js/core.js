var todo = angular.module('todo', ['todoController', 'ngRoute']);

todo.run(function (){
  alert("app bootstrapped");
});