angular.module('app').controller('payCtrl', ['$scope', 'paymentService', '$window','$state', '$stateParams', 

function($scope, paymentService, $window, $state, $stateParams){
    
    console.log($window.sessionStorage.getItem('prod'));

    $scope.payment={};

    $scope.comprar_button = function() { 
        console.log($scope.payment);
        var prod_precio = $window.sessionStorage.getItem('prod');
        
        // a MERCADOPAGO
        paymentService.postmp($scope.payment.nametit,$scope.payment.dnitype,$scope.payment.dni,$scope.payment.card,$scope.payment.month,$scope.payment.year,$scope.payment.code)
        .then(function(response){
            console.log(response.data);
            $window.sessionStorage.setItem('id_mp', JSON.stringify (response.data)); //tomo objeto
            console.log($window.sessionStorage.getItem('id_mp').id);
            alert("Se está procesando su compra");

              // reccuperas el id_mp del session getItem
        $scope.mp_card_token = JSON.parse($window.sessionStorage.getItem('id_mp')).id;
        $scope.session = JSON.parse($window.sessionStorage.getItem('id'));
       console.log($scope.session);
        // A MARCOS
        paymentService.postmyapp($scope.mp_card_token,prod_precio,  $scope.session)
        .then(function(response){
            console.log(response);
            alert(response.status);
            if(response.status == "approved") {
                alert("compra con exito");
                // redirect html
               /* $state.go('####');*/
            }else{
                // alert error
                alert("LOS DATOS INGRESADOS NO SON CORRECTOS");
            }
        })




        }, function(err){
            console.log(err);
        });

        // reccuperas el id_mp del session getItem
       /* $scope.mp_card_token = JSON.parse($window.sessionStorage.getItem('id_mp')).id;
        $scope.session = JSON.parse($window.sessionStorage.getItem('id'));
       console.log($scope.session);
        // A MARCOS
        paymentService.postmyapp($scope.mp_card_token,prod_precio,  $scope.session)
        .then(function(response){
            console.log(response);
            alert(response.status);
            if(response.status == "approved") {
                alert("compra con exito");
                // redirect html
               /* $state.go('####');
            }else{
                // alert error
                alert("LOS DATOS INGRESADOS NO SON CORRECTOS");
            }
        })*/
        //var id_trans = $window.sessionStorage.getItem('id_mp', response.data).id;

    }


}]);