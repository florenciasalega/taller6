
angular.module('app').controller('LoginCtrl', ['$scope', 'loginServices', '$window','$state', function($scope, loginServices,$window, $state){
    $scope.login = {
        username : "",
        password: ""
    };

    $scope.abrir = function() { 
        loginServices.postLogin($scope.login.username, $scope.login.password)
        .then(function(response){
            
            if(response.status == "400"){
                // error 
                alert("LOS DATOS INGRESADOS NO SON CORRECTOS." + response.data.message);
             }else{
                 // esta bien
                 $window.sessionStorage.setItem('id', JSON.stringify ( response.data )); //tomo token
                 //console.log(response);
                 $state.go('dash');  
             }



        });
        //llamas services postLogin ($scope.login.username, $scope.login.password)
    }
}]);