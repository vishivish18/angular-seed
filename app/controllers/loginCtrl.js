angular.module('app')
    .controller('loginCtrl', function($scope, $http, $window ,auth) {
        console.log("loginCtrl");
        console.log(auth.testServiceFunction(2))

        $scope.login = function() {
            $scope.signupData = {
                "username": $scope.username,
                "password": $scope.password
            }
            console.log("Login button is clicked")
            $http.post('https://12f1b606.ngrok.io/api/auth/login', $scope.signupData)
                .then(function(response) {
                     if(response.data.status){
                    console.log(response);
                    localStorage.setItem('token', response.data.result.token)
                    $http.defaults.headers.common['x-auth'] = localStorage.getItem('token')
                   
                  window.location.href ="/home"
                    }
                    else
                    {
                        $window.toastr.error(response.data.message);
                    }
                })
        }
        

    })