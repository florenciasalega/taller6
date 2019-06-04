
angular.module('app').controller('RegistrationCtrl', ['$scope', 'registrationServices', function($scope, registrationServices){
    
    $scope.registro = {
        username : "",
        nombre: "",
        surname: "",
        password: ""
    };

    $scope.registro = function() {
        alert($scope.registro.username);  

        registrationServices.PostRegistration($scope.registro.username,$scope.registro.nombre, $scope.registro.surname, $scope.registro.password)
        .then(function(response){
            alert(response);
        });
    }
}]);