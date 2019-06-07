'use strict';
angular.module('app').factory('loginServices', ['$http', '$q', function ($http, $q) {
    // url servicio
    var serviceBase = "https://miapp-taller6.herokuapp.com";
    
    var loginFactory = {};

    var _postLogin = function (username, pass) {

        var deferred = $q.defer();

		var param  = {
			username : username,
			password: pass,
			nocacheparam: new Date().getTime()
		};
        
        //paso ruta de la api (url servicio + route)
        $http.post(serviceBase + '/usuarios/authenticate' , param).then(function(response){
            deferred.resolve(response);
        });
        return deferred.promise
    };

    
    loginFactory.postLogin = _postLogin;

    return loginFactory;

}]);