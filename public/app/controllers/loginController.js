
angular.module('app').controller('LoginCtrl', ['$scope', 'loginServices', '$window', function($scope, loginServices,$window ){
    $scope.login = {
        username : "",
        password: ""
    };

    $scope.abrir = function() {
        alert($scope.login.username);  
        loginServices.postLogin($scope.login.username, $scope.login.password)
        .then(function(response){
            
            $window.sessionStorage.setItem(id, response.data); //tomo token

             $window.location.href = "#!/dash";
        });
        //llamas services postLogin ($scope.login.username, $scope.login.password)
    }
}]);