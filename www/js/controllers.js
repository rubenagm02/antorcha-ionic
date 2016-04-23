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

.controller('especialistasCtrl', function($scope) {

})

.controller('bienvenidoCtrl', function($scope) {

})

.controller('iniciaSesionCtrl', function($scope, $http, $location) {
  $scope.response = "";

  $scope.logeo = function(){
    var credenciales = {
    "correo" : $scope.correo,
    "pass" : $scope.pass
    };

    console.log(credenciales);
    $http({
        method : "POST",
        url : "http://api.antorcha.mx/login",
      //  url : "http://antorcha.app/login",
        data:  credenciales,
    })
    .success(function(response){
        console.log(response);
        app.constant('usuario', response);
        $scope.changeView =   $location.path('tab1');
    })
    .error(function(){
          $scope.response = response.nombre;
          console.log(response);
    });
  }

})

.controller('regStrateCtrl', function($scope, $http, $location) {
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
          //url : "http://api.antorcha.mx/login",
          url : "http://antorcha.app/V0.1/miembros",
          data:  datosUsuario,
      })
      .success(function(response){
          console.log(response);
          app.constant('usuario.id', response);
          $scope.changeView =  $location.path('tab7');
      })
      .error(function(){
            $scope.response = response.nombre;
            console.log(response);
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

.controller('deportesFavoritosCtrl', function($scope) {

})

.controller('nuevaMetaCtrl', function($scope) {

})

.controller('datosDePerfilCtrl',['usuario', function($scope) {
    console.log(usuario);

}])
