var myApp = angular.module('mercado', ['ui.router']);

myApp.config(function($stateProvider) {
  
  // route inicio de la app (/)
  var helloState = {
    name: 'hola',
    url: '/',
    template: '<h3> MERCADITO FAFA !!! </h3>'
  }
  // route login (/login) nos redirige a la view del login
  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'views/login.html'
  }
	
  // importante siempre agregar el nuevo route.
  $stateProvider.state(helloState);
  $stateProvider.state(loginState);
});
