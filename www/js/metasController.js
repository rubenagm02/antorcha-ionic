var app = angular.module('app.controllers')

.controller('metasCtrl', function($scope, $http) {
	//URL http://api.antorcha.mx/V0.1/metas/
	//http://api.antorcha.mx/V0.1/metaProgresos/
	var usuario = JSON.parse(window.localStorage.getItem("usuario"));
	console.log(usuario);
	var credenciales = {};
	$http({
          method : "GET",
          url : "http://api.antorcha.mx/V0.1/metas/" + usuario.id ,
          data:  credenciales,
      })
      .success(function(response){
        console.log(response.length);
        //Se obtienen las metas
        var metas = [];

        for (var x = 0; x < response.length; x++) {
        	var meta = {};
        	meta = response[x];
            meta.porcentaje = 50;
        	meta.tipoMedida = obtenerMedida(response[x].tipoMedida);
        	metas.push(meta);

        	//Se descarga su progreso
        	
        }

        $scope.metas = response;

        for (var x = 0; x < $scope.metas.length; x++) {
            var myService = {
                async: function(id) {
                  // $http returns a promise, which has a then function, which also returns a promise
                  var promise = $http.get("http://api.antorcha.mx/V0.1/metaProgresos/" + id).then(function (response) {
                    // The then function here is an opportunity to modify the response
                    //console.log(response);
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                  });
                  // Return the promise to the controller
                  return promise;
                }
              };

            myService.async($scope.metas[x].id).then(function (datos) {
                console.log($scope.metas[x]);
            });

        }

      })
      .error(function(response){
            //$scope.response = response.nombre;
            console.log(response);
      });


})

function obtenerMedida (medida) {
    switch (medida) {
        case "Segundos" : {
            return "SEG";
        }
        case "Minutos" : {
            return "MIN";
        }
        case "Horas" : {
            return "HR";
        }
        case "Gramos" : {
            return "GR";
        }
        case "Kilogramos" : {
            return "KG";
        }
        case "Centimetros" : {
            return "CM";
        }
        case "Metros" : {
            return "MT";
        }
        case "Kilometros" : {
            return "KM";
        }
        case "Porcentaje" : {
            return "%";
        }
        case "Repeticiones" : {
            return "REP";
        }
        case "Series" : {
            return "SER";
        }
        case "Vueltas" : {
            return "VLTS";
        }
        case "Puntos" : {
            return "PTS";
        }
        case "Anotaciones" : {
            return "ATS";
        }
        case "Juegos" : {
            return "J";
        }
        default : {
            return "N/A";
        }
    }
}