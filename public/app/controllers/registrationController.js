
angular.module('app').controller('RegistrationCtrl', ['$scope', 'registrationServices','$window', function($scope, registrationServices,$window){
    
    // $scope.registro = {
    //     username : "",
    //     nombre: "",
    //     surname: "",
    //     password: ""
    // };
    $scope.registro={};

    $scope.registro_button = function() {
        alert($scope.registro.username);  

        registrationServices.PostRegistration($scope.registro.username,$scope.registro.nombre, $scope.registro.surname, $scope.registro.password)
        .then(function(response){
            $window.sessionStorage.setItem('id', response.data); //tomo token
            alert("exito en registro ingrese");
        });
    }
}]);