'use strict';

angular.module('dashboardApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/components/main/main.html',
                controller: 'MainCtrl',
                sp: {
                    waitForUser: true
                }
            });
    });
