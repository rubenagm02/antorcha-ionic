var app = angular.module('app.controllers', [])


.controller('misEventosCtrl', function($scope) {
	$scope.eventos = JSON.parse(window.localStorage.getItem("eventos"));
})