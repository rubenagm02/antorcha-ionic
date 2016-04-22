angular.module('app.controllers', [])

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

.controller('medallasCtrl', function($scope) {

})

.controller('metasCtrl', function($scope) {

})

.controller('especialistasCtrl', function($scope) {

})

.controller('bienvenidoCtrl', function($scope) {

})

.controller('iniciaSesionCtrl', function($scope, $http) {
  $scope.response = "";

  $scope.logeo = function(){
    var credenciales = {
      "correo" : "$scope.correo",
      "pass" : "$scope.pass"
    }
    $http({
        method : "POST",
        url : "http://api.antorcha.mx/login",
        data:  credenciales,
    })
    .success(function(response){
      $scope.response = response.data;

    })
    .error(function(){
          $scope.response = response.data;
    });
  }

})

.controller('regStrateCtrl', function($scope) {

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

.controller('datosDePerfilCtrl', function($scope) {

})
