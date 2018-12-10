angular.module('alurapic',['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {

	// ativa o módulo do HTML5
	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/novo', {
		templateUrl: 'partials/foto.html',
		
	});

	$routeProvider.otherwise({redirectTo: '/fotos' })

});//depende do modulo minhasDiretivas. Pode ser inserido mais modulos.