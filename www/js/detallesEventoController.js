var app = angular.module('app.controllers')

.controller('detallesEventoCtrl', function($scope, $location) {
	$scope.evento = JSON.parse(window.localStorage.getItem("detalleEvento"));
	//Ruta de mis eventos /page1/tab1/page14
	$scope.agregarEvento = function (evento) {
		var eventos = JSON.parse(window.localStorage.getItem("eventos"));

		if (eventos == null) {
			eventos = [];
		}
		var agregar = true;

		for (var x = 0; x < eventos.lenght; x++) {

			if (eventos[x].id = evento.id) {
				agregar = false;
			}
		}



		if (agregar) {
			eventos.push(evento);
			window.localStorage.setItem("eventos", JSON.stringify(eventos));
		} else {
			alert("El evento ya ha sido agregado a tus favoritos");
		}

		$location.path("/page1/tab1/page14");
	}

})