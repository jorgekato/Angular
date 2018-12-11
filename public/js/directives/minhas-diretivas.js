angular.module('minhasDiretivas',[])
	.directive('meuPainel', function() {

	var ddo = {};//Directive Definition Object
	ddo.restrict ="AE";//diretiva pode ser usada tanto como Attribute ou Element. Existe o "C" para Comentário.
	ddo.transclude = true; //utilizado para indicar que um elemento filho deve ser mantido.

	//escopo privado
	ddo.scope = {
		titulo:'@'//@ indica que estamos copiando o valor como string do atributo titulo.  @titulo - pode ser abreviado como @, porem  a tag deve ter o mesmo nome.<meu-painel titulo="{{foto.titulo}}">
	};
	
	ddo.templateUrl = 'js/directives/meu-painel.html';
				
	return ddo;
})
.directive('minhaFoto', function() {

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo: '@',
		url: '@'
	};

	ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
	
	return ddo;
});