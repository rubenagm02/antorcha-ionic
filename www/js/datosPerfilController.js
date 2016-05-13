var app = angular.module('app.controllers')

.controller('datosDePerfilCtrl', function($scope, $rootScope) {
	var usuario =  JSON.parse(window.localStorage.getItem("usuario"));
	console.log(usuario);
    $scope.nombre = usuario.nombre;

})

function obtenerFecha(fecha){
	return "02/02/1992";
}