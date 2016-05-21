var app = angular.module('app.controllers', [])

.controller('buscarEspaciosCtrl', function($scope) {
  

      /*var inicializar = function() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);

        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapa"),
            mapOptions);

        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.mapa = map;
    }

    $scope.centerOnMe = function() {
        if(!$scope.map) {
            return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
    };

    $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
    };

      //google.maps.event.addDomListener(window, 'load', inicializar);
      $scope.inicializar = inicializar;
*/
})

.controller('misActividadesCtrl', function($scope) {

})

.controller('misEventosCtrl', function($scope) {
  $scope.eventos = JSON.parse(window.localStorage.getItem("eventos"));
})

.controller('disciplinasCtrl', function($scope) {

})

.controller('bienvenidoCtrl', function($scope) {

})

.controller('iniciaSesionCtrl', function($scope, $http, $location, $rootScope) {
  $scope.response = "";

  $scope.logeo = function(){
    var credenciales = {
    "correo" : $scope.correo,
    "pass" : $scope.pass
    };
    //console.log(credenciales);
    $http({
        method : "POST",
        url : "http://api.antorcha.mx/login",
        //url : "http://antorcha.app/login",
        data:  credenciales,
    })
    .success(function(response){
        //console.log(response);
        window.localStorage.setItem( "usuario", JSON.stringify(response) );
        $scope.changeView = $location.path('tab1');
    })
    .error(function(){
        alert("Parece que hubo un error");
    });
  }
})

.controller('regStrateCtrl', function($scope, $http, $location, $rootScope) {
    $scope.registro = function(){

      var datosUsuario = {
         "nombre" : $scope.nombre,
         "correo" : $scope.correo,
         "sexo" : $scope.genero,
         "pass" : $scope.pass,
         "fechaNacimiento" : $scope.fechaNacimiento
      }

      $http({
          method : "POST",
          url : "http://api.antorcha.mx/V0.1/miembros",
        //  url : "http://antorcha.app/V0.1/miembros",
          data:  datosUsuario,
      })
      .success(function(response){
        //  console.log(response);
          $rootScope.usuario.id = response.id;
          $scope.changeView =  $location.path('tab7');
      })
      .error(function(){
            $scope.response = response.nombre;
          //  console.log(response);
      });
    }
})

.controller('detallesEspacioCtrl', function($scope) {

})

.controller('ayudaCtrl', function($scope) {

})

.controller('escribirReseACtrl', function($scope) {

})

.controller('expandeElFuegoCtrl', function($scope) {

})

.controller('deportesFavoritosCtrl', function($scope, $http) {
  $scope.disciplinas = "";

  $http({
      method : "GET",
  //    url : "http://api.antorcha.mx/login",
      url : "http://api.antorcha.mx/V0.1/disciplinas" ,
  })
  .success(function(response){
      //console.log(response);
      $scope.disciplinas = response;
      //$rootScope.usuario =  response;
      //$scope.changeView =   $location.path('tab1');
  })
  .error(function(){
        //$scope.response = response.nombre;
        console.log(response);
  });

  $http({
      method : "GET",
      url : "http://api.antorcha.mx/V0.1/deportes" ,
  })
  .success(function(response){
  //    console.log(response);
      $scope.deportes = response;
      //$rootScope.usuario =  response;
      //$scope.changeView =   $location.path('tab1');
  })
  .error(function(){
        //$scope.response = response.nombre;
        console.log(response);
  });

  /*$scope.guardaDeporte = function(idDeporte){
    $http({
        method : "POST",
    //    url : "http://api.antorcha.mx/login",
        url : "http://api.antorcha.mx/V0.1/miembroDeporte" ,
        data : { "idMiembro" : $scope.usuario.id,
                  "idDeporte" : idDeporte
                }
    })
    .success(function(response){
    //    console.log(response);
        $scope.deportes = response;
        //$rootScope.usuario =  response;
        //$scope.changeView =   $location.path('tab1');
    })
    .error(function(){
          //$scope.response = response.nombre;
          console.log(response);
    });
  }*/


})

.controller('datosDePerfilCtrl', function($scope, $rootScope) {
    /*console.log($scope.usuario);
    $scope.nombreUsuario = $scope.usuario.nombre;
    $scope.edad = $scope.usuario.descripcion;*/

})
