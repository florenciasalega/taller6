
angular.module('app').controller('RegistrationCtrl', ['$scope', 'registrationServices','$window','$state', function($scope, registrationServices,$window,$state){
    
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
            if(response.status == "400"){
               // error 
               alert("LOS DATOS INGRESADOS NO SON CORRECTOS." + response.data.message);
            }else{
                // esta bien
                $window.sessionStorage.setItem('id', response.data); //tomo token
                //console.log(response);
                alert("Se ha registrado con éxito. Diríjase a Ingreso para acceder");  
                $state.go('Login');  
            }
            
            
        });
    }
}]);    