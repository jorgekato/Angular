angular.module('alurapic').controller('FotosController', function($scope, $http){

	$scope.fotos = [];
	
//modo utilizando o success
	$http.get('v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(error){
		console.log(error);
	})


	/*
//modo utilizando o promise
	var promise = $http.get('v1/fotos');
	promise.then(function(retorno) {
		$scope.fotos = retorno.data;
	}).catch(function(error){
		console.log(error);
	});
*/

});