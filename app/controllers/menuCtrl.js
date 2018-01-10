angular.module('app')
    .controller('menuCtrl', function($scope, $http, auth) {
        console.log("menuCtrl");
        console.log(auth.testServiceFunction(2))
        $scope.login = function() {
            console.log("Login button is clicked")
            $http.post('https://12f1b606.ngrok.io/api/auth/login', { "username": "moni", "password": "123456" }, function(response) {
                if (response) {
                    console.log(response)
                    $scope.body
                }

            })
        }




    })