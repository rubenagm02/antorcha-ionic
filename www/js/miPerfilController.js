var app = angular.module('app.controllers')

.controller('miPerfilCtrl', function($scope, $http) {
	console.log($scope.usuario);
	$scope.nombre_usuario = $scope.usuario.nombre;
	$scope.nombre_usuario = $scope.usuario.fechaNacimiento;
})