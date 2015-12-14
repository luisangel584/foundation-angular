'use strict';

var listApp = angular.module('listApp', []);

listApp.controller('ListCtrl', function($scope, $http){
	$http.get('data/products.json').success(function(data){
		$scope.listas = data.products;
	});
	
	$scope.guardar = function(i, q){
		if(q > 0){
			var p = $scope.listas[i-1].product;
			console.log("Agregados " + q + " de " + p);
		}else{
			console.log("Nada agregado");
		}
	};
});