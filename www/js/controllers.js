var app = angular.module('app.controllers', [])

.controller('buscarEspaciosCtrl', function($scope) {

})

.controller('buscarEventosCtrl', function($scope) {

})

.controller('misActividadesCtrl', function($scope) {

})

.controller('misEventosCtrl', function($scope) {

})

.controller('miPerfilCtrl', function($scope) {

})

.controller('disciplinasCtrl', function($scope) {

})

.controller('metasCtrl', function($scope) {

})

.controller('especialistasCtrl', function($scope, $http) {

    $scope.buscaEspecialistas = function(){
        $http({
            method : "GET",
        //    url : "http://api.antorcha.mx/login",
            url : "http://antorcha.app/V0.1/xEspecialidad/" + $scope.tipo +"/"+$scope.municipio ,
        })
        .success(function(response){
            console.log(response);
            var respuesta = response;
            for(especialista in response){
              if(especialista.especialidad == 1 ){
                  respuesta.especialidad = "Nutriologo";//Fisioterapeuta
              }else if(especialista.especialidad == 2){
                  respuesta.especialidad = "Fisioterapeuta";//
              }else if(especialista.especialidad == 3){
                  respuesta.especialidad = "Entrenador";//
              }
            }
            $scope.especialistas = respuesta;
            //$rootScope.usuario =  response;
            //$scope.changeView =   $location.path('tab1');
        })
        .error(function(){
              //$scope.response = response.nombre;
              console.log(response);
        });
    }


})

.controller('bienvenidoCtrl', function($scope) {

})

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
      //  url : "http://antorcha.app/login",
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

.controller('regStrateCtrl', function($scope, $http, $location, $rootScope) {
    $scope.registro = function(){

      var datosUsuario = {
         "nombre" : $scope.nombre,
         "correo" : $scope.correo,
         "sexo" : $scope.genero,
         "pass" : $scope.pass,
         "fechaNacimiento" : $scope.fechaNacimiento
      }

      $http({
          method : "POST",
          url : "http://api.antorcha.mx/V0.1/miembros",
        //  url : "http://antorcha.app/V0.1/miembros",
          data:  datosUsuario,
      })
      .success(function(response){
        //  console.log(response);
          $rootScope.usuario.id = response.id;
          $scope.changeView =  $location.path('tab7');
      })
      .error(function(){
            $scope.response = response.nombre;
          //  console.log(response);
      });
    }
})

.controller('detallesEspacioCtrl', function($scope) {

})

.controller('detallesEventoCtrl', function($scope) {

})

.controller('ayudaCtrl', function($scope) {

})

.controller('escribirReseACtrl', function($scope) {

})

.controller('expandeElFuegoCtrl', function($scope) {

})

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

.controller('nuevaMetaCtrl', function($scope) {

})

.controller('datosDePerfilCtrl', function($scope, $rootScope) {
    console.log($scope.usuario);
    $scope.nombreUsuario = $scope.usuario.nombre;
    $scope.edad = $scope.usuario.descripcion;

})
