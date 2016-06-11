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
        	meta.tipoMedida = obtenerMedida(response[x].tipoMedida);
            var avance = meta.inicio - meta.fin;;

            if (meta.progreso > 0) {

                if (meta.inicio > meta.fin) {
                    avance = avance / 100 * meta.progreso - meta.fin;
                } else {
                    avance = avance / 100 * meta.fin - meta.progreso;
                }
            } else {
                avance = 0;
            }
            meta.avance = avance;
        	metas.push(meta);

        	//Se descarga su progreso
        	
        }

        $scope.metas = response;

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