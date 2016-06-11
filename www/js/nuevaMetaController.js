var app = angular.module('app.controllers')

.controller('nuevaMetaCtrl', function($scope, $http, $location) {
	console.log($scope.parent)
	var usuario = JSON.parse(window.localStorage.getItem("usuario"));

	$scope.guardar = function (meta) {
		meta.idMiembro = usuario.id;
		meta.fechaInicio = new Date();

		$http({
	        method : "POST",
	        url : "http://api.antorcha.mx/V0.1/metas",
	        data:  meta,
	    })
	    .success(function(response){
	    	$scope.changeView = $location.path('page1/page19');
	    })
	    .error(function(){
	        alert("Parece que hubo un error");
	    });
	}

	//$scope.changeView = $location.path('tab1');
})