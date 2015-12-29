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
	
	$scope.add = function(i, q){		
		$scope.listas.push({ 'name':$scope.listas[i-1].item, 'cantidad': q });
		// Writing it to the server
		//		
		var dataObj = {
				name : $scope.listas[i-1].item,
				cantidad : q
		};	
		var res = $http.post('data/prod.json', dataObj);
		res.success(function(data, status, headers, config) {
			$scope.message = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});
	};
});