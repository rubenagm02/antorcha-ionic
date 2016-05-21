var app = angular.module('app.controllers')

.controller('datosDePerfilCtrl', function($scope, $rootScope) {
	var miembro =  JSON.parse(window.localStorage.getItem("usuario"));
	console.log(miembro);
	miembro.fechaNacimiento = obtenerFecha();
    $scope.miembro = miembro;

})

function obtenerFecha(fecha){
	return "1993-01-01";
}