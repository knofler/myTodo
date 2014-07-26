'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
  

    var todosInstore=localStorageService.get('todos');
    $scope.todos=todosInstore && todosInstore.split('\n') || [];
    // $scope.todos=[];

    $scope.$watch('todos',function(){
    	localStorageService.add('todos',$scope.todos.join('\n'))
    },true)

    var didsInstore=localStorageService.get('dids');
    $scope.dids=didsInstore && didsInstore.split('\n') || [];

    $scope.$watch('dids',function(){
        localStorageService.add('dids',$scope.dids.join('\n'))
    },true)  

    // $scope.idid=['Angularjs','Nodejs','Java'];
    
    $scope.addTodo=function(){
    	$scope.todos.push($scope.todo);
    	$scope.todo='';
    };

    $scope.addDid=function(index){
        $scope.dids.push($scope.todos.splice(index,1).toString());
        $scope.index='';
    };

    $scope.removeTodo=function(index){
    	$scope.todos.splice(index,1);
    };
     $scope.removeDid=function(index){
        $scope.dids.splice(index,1);
    };

    $scope.didThis=function(index){
        this.addDid(index);
    };

  });
