
angular.module('app').controller('LoginCtrl', ['$scope', 'loginServices', '$window','$state', function($scope, loginServices,$window, $state){
    $scope.login = {
        username : "",
        password: ""
    };

    $scope.abrir = function() { 
        loginServices.postLogin($scope.login.username, $scope.login.password)
        .then(function(response){
            
            $window.sessionStorage.setItem('id', JSON.stringify ( response.data )); //tomo token
            $state.go('dash');
             //$window.location.href = "#!/dash";
        });
        //llamas services postLogin ($scope.login.username, $scope.login.password)
    }
}]);