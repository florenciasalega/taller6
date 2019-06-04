'use strict';

// creacion del modulo y carga de dependencias
// Punto de inicio del programa
var app = angular.module('app', ['ui.router', 'oc.lazyLoad']);

// configuramos el ruteo o REDIRECIONAMIENTO de las vistas por angularjs
app.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider' , 
    function($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise("/");
    
        //Configuramos el ocLazyLoading (cargador de dependencias)
        // aca se cargan todas las dependencias que se necesiten
        $ocLazyLoadProvider.config({
            'debug': true, // para debugging 'true/false'
            'events': true, // para capturar Event 'true/false'
            'modules': [{ // Set modules initially
                name : 'home', // home
                files: ['/app/controllers/homeController.js']
            },{
                name : 'login', // login
                files: ['/app/controllers/loginController.js',
                        '/app/services/loginService.js']
             },{
                 name: 'registration', //registracion
                 files: ['/app/controllers/registrationController.js',
                        '/app/services/registrationService.js']
             },
             {
                 name: 'dashboard',
                 files: ['/app/controllers/dashController.js']
             }

            ]
        });
        //Configuracion del ruteo en angular
        $stateProvider
        .state('Home', {
            url: "/",
            views : {
                "" : {
                    templateUrl:"/app/views/home.html",
                    controller: "HomeCtrl"
                }
            },
            resolve: {
                HomeCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('home');
                }]
            }
        })
        .state('Login', {
            url: "/login",
            views : {
                "" : {
                    templateUrl:"/app/views/login.html",
                    controller: "LoginCtrl"
                }
            },
            resolve: {
                LoginCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('login');
                }]
            }
        })
        .state('Registration', {
            url: "/registration",
            views : {
                "" : {
                    templateUrl:"/app/views/registro.html",
                    controller: "RegistrationCtrl"
                }
            },
            resolve: {
                RegistrationCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load('registration');
                }]
            }
        })
        .state('dash', {
            url: "/dashboard",
            views : {
                "" : {
                    templateUrl:"/app/views/dashboard.html",
                    controller: "dashCtrl"
                }
            },
            resolve: {
                RegistrationCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load('dashboard');
                }]
            }
        })
}]);


//'$ocLazyLoad' automaticamente resuelve que modulo debe cargar para cada view