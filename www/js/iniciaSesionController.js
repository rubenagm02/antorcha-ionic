var app = angular.module('app.controllers')

.controller('iniciaSesionCtrl', function($scope, $http, $location, $rootScope) {
  $scope.response = "";

  $scope.logeo = function(){
    var credenciales = {
    "correo" : $scope.correo,
    "pass" : $scope.pass
    };
    //console.log(credenciales);
    $http({
        method : "POST",
        url : "http://api.antorcha.mx/login",
        //url : "http://antorcha.app/login",
        data:  credenciales,
    })
    .success(function(response){
        //console.log(response);
        $rootScope.usuario =  response;
        $scope.changeView =   $location.path('tab1');
    })
    .error(function(){
          $scope.response = response.nombre;
          //console.log(response);
    });
  }
})