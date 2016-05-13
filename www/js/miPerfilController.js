var app = angular.module('app.controllers')

.controller('miPerfilCtrl', function($scope, $http) {
	var usuario =  JSON.parse(window.localStorage.getItem("usuario"));
	console.log(usuario);

	if (usuario.queBusco != "null") {
		$scope.que_usco = usuario.queBusco;
	} else {
		$scope.que_busco = "Cuentanos más de ti presionando en la parte de la foto";
	}
	
})