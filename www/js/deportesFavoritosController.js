var app = angular.module('app.controllers')

.controller('deportesFavoritosCtrl', function($scope, $http) {
  $scope.disciplinas = "";

  $http({
      method : "GET",
  //    url : "http://api.antorcha.mx/login",
      url : "http://api.antorcha.mx/V0.1/disciplinas" ,
  })
  .success(function(response){
      //console.log(response);
      $scope.disciplinas = response;
      //$rootScope.usuario =  response;
      //$scope.changeView =   $location.path('tab1');
  })
  .error(function(){
        //$scope.response = response.nombre;
        console.log(response);
  });

  $http({
      method : "GET",
      url : "http://api.antorcha.mx/V0.1/deportes" ,
  })
  .success(function(response){
  //    console.log(response);
      $scope.deportes = response;
      //$rootScope.usuario =  response;
      //$scope.changeView =   $location.path('tab1');
  })
  .error(function(){
        //$scope.response = response.nombre;
        console.log(response);
  });

  /*$scope.guardaDeporte = function(idDeporte){
    $http({
        method : "POST",
    //    url : "http://api.antorcha.mx/login",
        url : "http://api.antorcha.mx/V0.1/miembroDeporte" ,
        data : { "idMiembro" : $scope.usuario.id,
                  "idDeporte" : idDeporte
                }
    })
    .success(function(response){
    //    console.log(response);
        $scope.deportes = response;
        //$rootScope.usuario =  response;
        //$scope.changeView =   $location.path('tab1');
    })
    .error(function(){
          //$scope.response = response.nombre;
          console.log(response);
    });
  }*/


})