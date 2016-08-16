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



}]);
