'use strict';
app.controller('navCtrl', ['$scope', '$location','$http', function ($scope, $location,$http) {
 
    $scope.logout=function() {
    	console.log(localStorage.getItem('token'))
            localStorage.removeItem('token');
            console.log(localStorage.getItem('token'))
            delete $http.defaults.headers.common['x-auth']
            $location.path("/")



        }

}]);