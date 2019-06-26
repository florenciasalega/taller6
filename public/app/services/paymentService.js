'use strict';
angular.module('app').factory('paymentService', ['$http', '$q', function ($http, $q) {
    // url servicio
    var smpBase = "https://api.mercadopago.com/v1/card_tokens?public_key=TEST-4ee01e7f-08c9-42ea-a6e2-885bf99abd56";
    var myappBase= "https://miapp-taller6.herokuapp.com/payment/pay";
    
    var payFactory = {};
    var cardHolder_global = {};

    // primer llamada
    var _postmp = function (nametit,dnitype,dni,card, month, year, code) {
        var deferred = $q.defer();
        nametit="APRO";

        cardHolder_global = {
            name: nametit,
		    identification: {
			    type: dnitype,
			    number: dni
		    }
        };
        var param = {
            cardHolder : cardHolder_global,
            card_number: card,
            expiration_month: month,
            expiration_year: year,
            security_code: code

        };

        console.log(param);

       $http.post(smpBase , param).then(function(response){
            deferred.resolve(response);
        },function(error){
            console.log(error);
        });
        
        return deferred.promise;
    };


    var _postmyapp = function (id_token, precio, session){
        console.log(cardHolder_global);
        var deferred = $q.defer();

        var param = {
            amount: precio,
            mp_payment_method_id: "master",
            dni : cardHolder_global.identification.number,
            mp_card_token:  id_token

        };

        
        /*$http.defaults.headers.common.Authorization = 'Bearer ' + id_token;
        var headers = new Headers();
        headers.append('Content-Type', "application/json");
        headers.append("Authorization", "bearer " + session.token);*/

        var headers = {
            'Content-Type':  "application/json",
            'Authorization': "bearer " + session.token
            
        }; 
        $http.post(myappBase,param, headers).then(function(response){
            deferred.resolve(response);
        });
        return deferred.promise;
    };

    payFactory.postmp = _postmp;
    payFactory.postmyapp = _postmyapp;

    return payFactory;

}]);