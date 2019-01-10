'use strict';

angular.module('dashboardApp')
    .controller('MainCtrl', function($scope, $http) {
        $scope.awesomeThings = [];
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }];

        $http.get('/api/thing').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });
    });
