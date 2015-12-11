'use strict';

var listApp = angular.module('listApp', []);

listApp.controller('ListCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('data/products.json').success(function(data){
		$scope.listas = data;
	});
}]);
