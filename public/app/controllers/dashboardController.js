angular.module('app').controller('dashCtrl', ['$scope', 'dashServices','$state', '$stateParams', '$window', 
function($scope, dashServices,$state, $stateParams, $window){
    
    $scope.listado = [];
    
    dashServices.getDashProdcts()
    .then(function (result){
        console.log(result);
        $scope.listado = result;
    });


    $scope._comprar = function(prod){
        $window.sessionStorage.setItem('prod', prod.precio); 
        $state.go('payment');
    }

    $scope._out = function(prod){
        $state.go('Home');
    }



}]);