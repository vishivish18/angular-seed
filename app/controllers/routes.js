	app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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

	});