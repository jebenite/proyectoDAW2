var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    var refresh = function () {
	    $http.get('/sucursal').success(function(response){
	    	console.log('i got the data i requested');
	    	$scope.sucursales = response;

	    });
	};

	refresh();



    $scope.edit = function(id) {
    	console.log(id);
    	$http.get('/sucursal/' +id).success(function(response) {
    		$scope.contact = response;
    	});
    };
    $scope.mapa = function(dir,id) {
        console.log(dir);
        init(dir,id);
    };
    function init(dir,id){

    var map = new google.maps.Map(document.getElementById('map'+id), {
      zoom: 16
    });
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
      'address': dir
    },
    function(results, status) {
    if(status == google.maps.GeocoderStatus.OK) {
      new google.maps.Marker({
      position: results[0].geometry.location,
      map: map
      });
      google.maps.event.trigger(map, 'resize');
      map.setCenter(results[0].geometry.location);
      }
    });
  }




}]);
