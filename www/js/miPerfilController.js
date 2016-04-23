var app = angular.module('app.controllers')

.controller('miPerfilCtrl', function($scope, $http, $location, $rootScope) {
	console.log($rootScope.usuario);
})