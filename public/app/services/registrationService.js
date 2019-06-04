'use strict';
angular.module('app').factory('registrationServices', ['$http', '$q', function ($http, $q) {
    // url servicio
    var serviceBase = "https://miapp-taller6.herokuapp.com";
    
    var loginFactory = {};

    var _postRegistration = function (username, name, surname, pass) {
        
        var deferred = $q.defer();

		var param  = {
            username : username,
            nombre: name,
            apellido: surname,
			password: pass,
            nocacheparam: new Date().getTime() 
            
            /*username : 'FlorSalega',
            name: 'Flor',
            surname: 'salega',
			pass: 'Probando contraseña234',*/

		};
        console.log(param);
        //paso ruta de la api (url servicio + route)
        $http.get(serviceBase + '/usuarios/create' , {
            params: param
        }, function(resp) {
            deferred.response(resp);
        });
        return deferred.promise;
    };

    loginFactory.PostRegistration = _postRegistration;

    return loginFactory;

}]);