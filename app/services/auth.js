angular.module('app')
    .service('auth', function($http) {
        return {
            testServiceFunction: testServiceFunction
        }
        function testServiceFunction(param) {
        	return "This is from service "+param
        }
    })