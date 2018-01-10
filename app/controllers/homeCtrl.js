angular.module('app')
    .controller('homeCtrl' , function($scope, $http ) {
        console.log("homeCtrl");
        $scope.header = " Home Page"
        $scope.title = " Home Title"
        $scope.content = " Home content"

    })


