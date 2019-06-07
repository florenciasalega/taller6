
angular.module('app').controller('LoginCtrl', ['$scope', 'loginServices', '$window','$state', function($scope, loginServices,$window, $state){
    $scope.login = {
        username : "",
        password: ""
    };

    $scope.abrir = function() {
        alert($scope.login.username);  
        loginServices.postLogin($scope.login.username, $scope.login.password)
        .then(function(response){
            
            $window.sessionStorage.setItem('id', response.data); //tomo token
            $state.go('dash');
             //$window.location.href = "#!/dash";
        });
        //llamas services postLogin ($scope.login.username, $scope.login.password)
    }
}]);