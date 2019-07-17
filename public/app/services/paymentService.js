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
        nametit="APRO_123";

        cardHolder_global = {
            name: nametit,
		    identification: {
			    type: "DNI",
			    number: dni
		    }
        };
        var param = {
            cardholder : cardHolder_global,
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
        //console.log(cardHolder_global);
        var deferred = $q.defer();
        console.log(precio)
        var param = {
        
            amount: 10,
            //transaction_amount: parseInt(precio) ,
            mp_payment_method_id: "master",
            dni: cardHolder_global.identification.number,
            mp_card_token: id_token

        };


        var req = {
            method: 'POST',
            url: myappBase,
            headers: {
              'Content-Type':'application/json' ,
              'Authorization': "bearer " + session.token
            },
            data: JSON.stringify(param)
        }
        $http(req).then(function(response){
            deferred.resolve(response);
        }).catch(function (error){
            // error status, messages
            deferred.resolve(error);
        });

        return deferred.promise;
    };

    payFactory.postmp = _postmp;
    payFactory.postmyapp = _postmyapp;

    return payFactory;

}]);