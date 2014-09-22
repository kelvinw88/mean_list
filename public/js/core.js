var todo = angular.module('todo', ['todoController']);

todo.run(function (){
  alert("app bootstrapped");
});