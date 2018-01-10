var app = angular.module('app', [
    'ngRoute', 'ui.router'
])


angular.module('app')
    .controller('homeCtrl' , ["$scope", "$http", function($scope, $http ) {
        console.log("homeCtrl");
        $scope.header = " Home Page"
        $scope.title = " Home Title"
        $scope.content = " Home content"

    }])



angular.module('app')
    .controller('loginCtrl', ["$scope", "$http", "$window", "auth", function($scope, $http, $window ,auth) {
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
                    console.log(response)
                    localStorage.setItem('token', response.data.result.token)
                    $http.defaults.headers.common['x-auth'] = localStorage.getItem('token')
                   
                  window.location.href ="/home";
                    }
                    else
                    {
                        $window.toastr.error(response.data.message);
                    }
                })
        }
        

    }])
angular.module('app')
    .controller('masterCtrl', ["$scope", "$http", "$rootScope", function($scope, $http, $rootScope) {

        console.log("masterCtrl");        
       
    }])

angular.module('app')
    .controller('menuCtrl', ["$scope", "$http", "auth", function($scope, $http, auth) {
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




    }])
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
	app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('login', {
	            url: '/',
	            views: {
	                'content': {
	                    templateUrl: '../app/views/login.html',
	                    controller: 'loginCtrl'
	                }
	            }
	        })

	        .state('app', {
	            url: '/home',
	            views: {
	                'header': {
	                    templateUrl: '../app/views/nav.html',
	                    controller: 'navCtrl'
	                },
	                'content': {
	                    templateUrl: '../views/home.html',
	                    controller: 'homeCtrl'
	                }
	            }
	        })

	    .state('app.menu', {
	        url: 'menu',
	        views: {
	            'content@': {
	                templateUrl: '../app/views/menu.html',
	                controller: 'menuCtrl'
	            }
	        }

	    })
	    $locationProvider.html5Mode(true)

	}]);
angular.module('app')
    .service('auth', ["$http", function($http) {
        return {
            testServiceFunction: testServiceFunction
        }
        function testServiceFunction(param) {
        	return "This is from service "+param
        }
    }])
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW5DdHJsLmpzIiwiY29udHJvbGxlcnMvbWFzdGVyQ3RybC5qcyIsImNvbnRyb2xsZXJzL21lbnVDdHJsLmpzIiwiY29udHJvbGxlcnMvbmF2Q3RybC5qcyIsImNvbnRyb2xsZXJzL3JvdXRlcy5qcyIsInNlcnZpY2VzL2F1dGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxNQUFBLFFBQUEsT0FBQSxPQUFBO0lBQ0EsV0FBQTs7OztBQ0RBLFFBQUEsT0FBQTtLQUNBLFdBQUEsaUNBQUEsU0FBQSxRQUFBLFFBQUE7UUFDQSxRQUFBLElBQUE7UUFDQSxPQUFBLFNBQUE7UUFDQSxPQUFBLFFBQUE7UUFDQSxPQUFBLFVBQUE7Ozs7OztBQ0xBLFFBQUEsT0FBQTtLQUNBLFdBQUEsb0RBQUEsU0FBQSxRQUFBLE9BQUEsU0FBQSxNQUFBO1FBQ0EsUUFBQSxJQUFBO1FBQ0EsUUFBQSxJQUFBLEtBQUEsb0JBQUE7O1FBRUEsT0FBQSxRQUFBLFdBQUE7WUFDQSxPQUFBLGFBQUE7Z0JBQ0EsWUFBQSxPQUFBO2dCQUNBLFlBQUEsT0FBQTs7WUFFQSxRQUFBLElBQUE7WUFDQSxNQUFBLEtBQUEsNENBQUEsT0FBQTtpQkFDQSxLQUFBLFNBQUEsVUFBQTtxQkFDQSxHQUFBLFNBQUEsS0FBQSxPQUFBO29CQUNBLFFBQUEsSUFBQTtvQkFDQSxhQUFBLFFBQUEsU0FBQSxTQUFBLEtBQUEsT0FBQTtvQkFDQSxNQUFBLFNBQUEsUUFBQSxPQUFBLFlBQUEsYUFBQSxRQUFBOztrQkFFQSxPQUFBLFNBQUEsTUFBQTs7O29CQUdBO3dCQUNBLFFBQUEsT0FBQSxNQUFBLFNBQUEsS0FBQTs7Ozs7OztBQ3RCQSxRQUFBLE9BQUE7S0FDQSxXQUFBLGdEQUFBLFNBQUEsUUFBQSxPQUFBLFlBQUE7O1FBRUEsUUFBQSxJQUFBOzs7O0FDSEEsUUFBQSxPQUFBO0tBQ0EsV0FBQSx3Q0FBQSxTQUFBLFFBQUEsT0FBQSxNQUFBO1FBQ0EsUUFBQSxJQUFBO1FBQ0EsUUFBQSxJQUFBLEtBQUEsb0JBQUE7UUFDQSxPQUFBLFFBQUEsV0FBQTtZQUNBLFFBQUEsSUFBQTtZQUNBLE1BQUEsS0FBQSw0Q0FBQSxFQUFBLFlBQUEsUUFBQSxZQUFBLFlBQUEsU0FBQSxVQUFBO2dCQUNBLElBQUEsVUFBQTtvQkFDQSxRQUFBLElBQUE7b0JBQ0EsT0FBQTs7Ozs7Ozs7OztBQ1RBO0FBQ0EsSUFBQSxXQUFBLFdBQUEsQ0FBQSxVQUFBLFlBQUEsU0FBQSxVQUFBLFFBQUEsVUFBQSxPQUFBOztJQUVBLE9BQUEsT0FBQSxXQUFBO0tBQ0EsUUFBQSxJQUFBLGFBQUEsUUFBQTtZQUNBLGFBQUEsV0FBQTtZQUNBLFFBQUEsSUFBQSxhQUFBLFFBQUE7WUFDQSxPQUFBLE1BQUEsU0FBQSxRQUFBLE9BQUE7WUFDQSxVQUFBLEtBQUE7Ozs7Ozs7Q0NSQSxJQUFBLHFFQUFBLFNBQUEsZ0JBQUEsb0JBQUEsbUJBQUE7S0FDQSxtQkFBQSxVQUFBO0tBQ0E7VUFDQSxNQUFBLFNBQUE7YUFDQSxLQUFBO2FBQ0EsT0FBQTtpQkFDQSxXQUFBO3FCQUNBLGFBQUE7cUJBQ0EsWUFBQTs7Ozs7VUFLQSxNQUFBLE9BQUE7YUFDQSxLQUFBO2FBQ0EsT0FBQTtpQkFDQSxVQUFBO3FCQUNBLGFBQUE7cUJBQ0EsWUFBQTs7aUJBRUEsV0FBQTtxQkFDQSxhQUFBO3FCQUNBLFlBQUE7Ozs7O01BS0EsTUFBQSxZQUFBO1NBQ0EsS0FBQTtTQUNBLE9BQUE7YUFDQSxZQUFBO2lCQUNBLGFBQUE7aUJBQ0EsWUFBQTs7Ozs7S0FLQSxrQkFBQSxVQUFBOzs7QUNyQ0EsUUFBQSxPQUFBO0tBQ0EsUUFBQSxrQkFBQSxTQUFBLE9BQUE7UUFDQSxPQUFBO1lBQ0EscUJBQUE7O1FBRUEsU0FBQSxvQkFBQSxPQUFBO1NBQ0EsT0FBQSx3QkFBQTs7T0FFQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgICAnbmdSb3V0ZScsICd1aS5yb3V0ZXInXG5dKVxuXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAuY29udHJvbGxlcignaG9tZUN0cmwnICwgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJob21lQ3RybFwiKTtcbiAgICAgICAgJHNjb3BlLmhlYWRlciA9IFwiIEhvbWUgUGFnZVwiXG4gICAgICAgICRzY29wZS50aXRsZSA9IFwiIEhvbWUgVGl0bGVcIlxuICAgICAgICAkc2NvcGUuY29udGVudCA9IFwiIEhvbWUgY29udGVudFwiXG5cbiAgICB9KVxuXG5cbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ2xvZ2luQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICR3aW5kb3cgLGF1dGgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luQ3RybFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhdXRoLnRlc3RTZXJ2aWNlRnVuY3Rpb24oMikpXHJcblxyXG4gICAgICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2lnbnVwRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogJHNjb3BlLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJwYXNzd29yZFwiOiAkc2NvcGUucGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIGJ1dHRvbiBpcyBjbGlja2VkXCIpXHJcbiAgICAgICAgICAgICRodHRwLnBvc3QoJ2h0dHBzOi8vMTJmMWI2MDYubmdyb2suaW8vYXBpL2F1dGgvbG9naW4nLCAkc2NvcGUuc2lnbnVwRGF0YSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3RhdHVzKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS5kYXRhLnJlc3VsdC50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsneC1hdXRoJ10gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID1cIi9ob21lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR3aW5kb3cudG9hc3RyLmVycm9yKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgfSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAuY29udHJvbGxlcignbWFzdGVyQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRyb290U2NvcGUpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1hc3RlckN0cmxcIik7ICAgICAgICBcbiAgICAgICBcbiAgICB9KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgLmNvbnRyb2xsZXIoJ21lbnVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgYXV0aCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnVDdHJsXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhhdXRoLnRlc3RTZXJ2aWNlRnVuY3Rpb24oMikpXG4gICAgICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBidXR0b24gaXMgY2xpY2tlZFwiKVxuICAgICAgICAgICAgJGh0dHAucG9zdCgnaHR0cHM6Ly8xMmYxYjYwNi5uZ3Jvay5pby9hcGkvYXV0aC9sb2dpbicsIHsgXCJ1c2VybmFtZVwiOiBcIm1vbmlcIiwgXCJwYXNzd29yZFwiOiBcIjEyMzQ1NlwiIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9keVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG5cblxuXG4gICAgfSkiLCIndXNlIHN0cmljdCc7XG5hcHAuY29udHJvbGxlcignbmF2Q3RybCcsIFsnJHNjb3BlJywgJyRsb2NhdGlvbicsJyRodHRwJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCRodHRwKSB7XG4gXG4gICAgJHNjb3BlLmxvZ291dD1mdW5jdGlvbigpIHtcbiAgICBcdGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSlcbiAgICAgICAgICAgIGRlbGV0ZSAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsneC1hdXRoJ11cbiAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL1wiKVxuXG5cblxuICAgICAgICB9XG5cbn1dKTsiLCJcdGFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcblx0ICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcblx0ICAgICRzdGF0ZVByb3ZpZGVyXG5cdCAgICAgICAgLnN0YXRlKCdsb2dpbicsIHtcblx0ICAgICAgICAgICAgdXJsOiAnLycsXG5cdCAgICAgICAgICAgIHZpZXdzOiB7XG5cdCAgICAgICAgICAgICAgICAnY29udGVudCc6IHtcblx0ICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL2FwcC92aWV3cy9sb2dpbi5odG1sJyxcblx0ICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnbG9naW5DdHJsJ1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSlcblxuXHQgICAgICAgIC5zdGF0ZSgnYXBwJywge1xuXHQgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG5cdCAgICAgICAgICAgIHZpZXdzOiB7XG5cdCAgICAgICAgICAgICAgICAnaGVhZGVyJzoge1xuXHQgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vYXBwL3ZpZXdzL25hdi5odG1sJyxcblx0ICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnbmF2Q3RybCdcblx0ICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgICAgICAnY29udGVudCc6IHtcblx0ICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL3ZpZXdzL2hvbWUuaHRtbCcsXG5cdCAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2hvbWVDdHJsJ1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSlcblxuXHQgICAgLnN0YXRlKCdhcHAubWVudScsIHtcblx0ICAgICAgICB1cmw6ICdtZW51Jyxcblx0ICAgICAgICB2aWV3czoge1xuXHQgICAgICAgICAgICAnY29udGVudEAnOiB7XG5cdCAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL2FwcC92aWV3cy9tZW51Lmh0bWwnLFxuXHQgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ21lbnVDdHJsJ1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICB9KVxuXHQgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpXG5cblx0fSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgLnNlcnZpY2UoJ2F1dGgnLCBmdW5jdGlvbigkaHR0cCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGVzdFNlcnZpY2VGdW5jdGlvbjogdGVzdFNlcnZpY2VGdW5jdGlvblxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRlc3RTZXJ2aWNlRnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgICAgXHRyZXR1cm4gXCJUaGlzIGlzIGZyb20gc2VydmljZSBcIitwYXJhbVxuICAgICAgICB9XG4gICAgfSkiXX0=
