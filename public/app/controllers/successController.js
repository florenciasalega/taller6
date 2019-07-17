
angular.module('app').controller('successCtrl', ['$scope', '$state', 
function($scope, $state){


    $scope.backdash = function() { 
                 
        
        $state.go('dash');
            
    }

    $scope.backhome = function() { 
                 
        
        $state.go('Home');
            
    }

}]);